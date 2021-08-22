function isReferenceObject1(x) {
    return x && !!x.$ref;
}
function isSchemaObject1(x) {
    return typeof x.type === "string";
}
function isRequestBodyObject1(x) {
    return typeof x.content === "object";
}
export { isReferenceObject1 as isReferenceObject };
export { isSchemaObject1 as isSchemaObject };
export { isRequestBodyObject1 as isRequestBodyObject };
function generateSchema(name, schema, indent) {
    if (isReferenceObject1(schema)) {
        const schemaPropertyPaths = schema.$ref.replace(/^#\/components/, "").split("/");
        const refSchemaName = schemaPropertyPaths[schemaPropertyPaths.length - 1];
        return refSchemaName;
    } else {
        const isRequired = schema.required;
        const isNullable = schema.nullable;
        function generateLiteral(type) {
            let stringResult = `${name ? `type ${name} = ` : ""}${type}`;
            if (!isRequired) {
                stringResult += " | undefined";
            }
            if (isNullable) {
                stringResult += " | null";
            }
            return stringResult;
        }
        switch(schema.type){
            case "string":
                if (schema.format === "binary") return generateLiteral("File");
                if (schema.enum) {
                    return generateLiteral(schema.enum.map((v)=>`"${v}"`
                    ).join(" | "));
                }
                return generateLiteral("string");
            case "boolean":
                if (schema.enum) {
                    return generateLiteral(schema.enum.join(" | "));
                }
                return generateLiteral("boolean");
            case "integer":
            case "number":
                if (schema.enum) {
                    return generateLiteral(schema.enum.join(" | "));
                }
                return generateLiteral("number");
            case "array":
                if (!schema.items) return "any[]";
                return `Array<${generateSchema("", schema.items, indent)}>`;
            case "object":
                const outputObject = [];
                for(const prop in schema.properties){
                    const propSchema = schema.properties[prop];
                    outputObject.push(`${prop}: ${generateSchema("", propSchema, indent)}`);
                }
                return `${name ? `interface ${name} ` : ""}{${outputObject.join(", ")}}`;
            default:
                return `${name ? `type ${name} = ` : ""}any`;
        }
    }
}
function generateParams(param, indent) {
    if (isReferenceObject1(param)) {
        return "";
    }
    return generateSchema("", param.schema, indent);
}
function generateComponent(swagger, indent) {
    const output = [];
    if (swagger.components) {
        if (swagger.components.schemas) {
            for(const componentName in swagger.components.schemas){
                const schema = swagger.components.schemas[componentName];
                output.push("export " + generateSchema(componentName, schema, indent));
            }
        }
    }
    return output.join("\n");
}
function generateBody(body, indent) {
    if (!body.content) return "null";
    const jsonBody = body.content["application/json"];
    const streamBody = body.content["application/octet-stream"];
    const formBody = body.content["application/x-www-form-urlencoded"];
    const mediaSchema = jsonBody || streamBody || formBody;
    if (!mediaSchema.schema) return "null";
    return generateSchema("", mediaSchema.schema, 0);
}
function generateApi(swagger, indent) {
    const urlBlock = [];
    const methods = [
        "get",
        "post",
        "delete",
        "put",
        "head",
        "options",
        "trace",
        "patch"
    ];
    for(const url in swagger.paths){
        const pathItemObject = swagger.paths[url];
        for (const method of methods){
            const operation = pathItemObject[method];
            if (!operation) continue;
            const paramsPath = {
            };
            const paramsHeader = {
            };
            const paramsQuery = {
            };
            let paramsBody = "";
            let responseBody = "";
            if (operation.parameters) {
                for (const param of operation.parameters){
                    if (!isReferenceObject1(param)) {
                        switch(param.in){
                            case "path":
                                paramsPath[param.name] = generateParams(param, indent);
                                break;
                            case "header":
                                paramsHeader[param.name] = generateParams(param, indent);
                                break;
                            case "query":
                                paramsQuery[param.name] = generateParams(param, indent);
                                break;
                        }
                    } else {
                        console.warn("ignore params");
                    }
                }
            }
            function generateParamsStr(name, obj) {
                const keys = Object.keys(obj);
                if (!keys.length) return `${name}?: {}`;
                const str = keys.map((key)=>`${key}: ${obj[key]}`
                ).join(", ");
                return `${name}: {${str}}`;
            }
            if (operation.requestBody) {
                if (isRequestBodyObject1(operation.requestBody)) {
                    paramsBody = generateBody(operation.requestBody, 0);
                }
            }
            if (operation.responses) {
                if (operation.responses["200"] || operation.responses.default) {
                    const successResponse = operation.responses["200"] || operation.responses.default;
                    if (isReferenceObject1(successResponse)) {
                        responseBody = generateSchema("", successResponse, 0);
                    } else {
                        responseBody = generateBody(successResponse, 0);
                    }
                } else {
                    responseBody = "unknown";
                }
            }
            const routerParams = [
                generateParamsStr("path", paramsPath) === "path?: {}" ? "path?: MapString" : generateParamsStr("path", paramsPath),
                generateParamsStr("query", paramsQuery) === "query?: {}" ? "query?: MapString" : generateParamsStr("query", paramsQuery),
                generateParamsStr("header", paramsHeader) === "header?: {}" ? "header?: MapString" : generateParamsStr("header", paramsHeader),
                paramsBody ? `body: ${paramsBody}` : "body?: any", 
            ].filter((v)=>v
            );
            const rule = `${method}(url: "${url}", options: {${routerParams.join(", ")}}): Promise<${responseBody}>`;
            urlBlock.push(rule);
        }
    }
    urlBlock.push("/* default methods */");
    for (const method of methods){
        const rule = `${method}<T = unknown>(url: string, options: { path?: MapAny, query?: MapAny, header?: MapString, body?: any }): Promise<T>`;
        urlBlock.push(rule);
    }
    return `export interface SwaggerApi{
${urlBlock.map((v)=>" ".repeat(2) + v
    ).join("\n")}
}`;
}
function generateDefaultTypes() {
    return `/* default type by generation start */
interface MapAny {
  [key: string]: any
}
interface MapString {
  [key: string]: string | undefined
}
/* default type by generation end */`;
}
function generateDefinition1(content) {
    const indent = 2;
    const swagger = JSON.parse(content);
    const output = [
        generateDefaultTypes(),
        generateComponent(swagger, 2),
        generateApi(swagger, 2)
    ];
    return output.join("\n\n");
}
export { generateDefinition1 as generateDefinition };
function path2apiName(path) {
    return path.replace(/^\//, "").replace(/\/(\w)/g, (all, letter)=>letter.toUpperCase()
    );
}
function generateImplement1(content, sdkContent, domain) {
    const swagger = JSON.parse(content);
    domain = domain.replace(/\/$/, "");
    if (swagger.servers) {
        const apis = [];
        for (const server of swagger.servers){
            const apiName = path2apiName(server.url);
            const api = `export const ${apiName} = new Http("${domain}", "${server.url}")`;
            apis.push(api);
        }
        sdkContent += "\n" + apis.join("\n");
    } else {
        sdkContent += `\nexport const defaultApi = new Http("${domain}", "")`;
    }
    return sdkContent;
}
export { generateImplement1 as generateImplement };
