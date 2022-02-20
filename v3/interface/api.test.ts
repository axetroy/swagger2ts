import { assertEquals } from "https://deno.land/std@0.126.0/testing/asserts.ts";
import { generatePaths } from "./api.ts";

Deno.test({
  name: "write",
  fn: async () => {
    const output = generatePaths({
      "/{dataset}/{version}/fields": {
        get: {
          tags: ["metadata"],
          summary:
            "Provides the general information about the API and the list of fields that can be used to query the dataset.",
          description:
            "This GET API returns the list of all the searchable field names that are in the oa_citations. Please see the 'fields' attribute which returns an array of field names. Each field or a combination of fields can be searched using the syntax options shown below.",
          operationId: "list-searchable-fields",
          parameters: [
            {
              name: "dataset",
              in: "path",
              description: "Name of the dataset.",
              required: true,
              example: "oa_citations",
              schema: {
                type: "string",
              },
            },
            {
              name: "version",
              in: "path",
              description: "Version of the dataset.",
              required: true,
              example: "v1",
              schema: {
                type: "string",
              },
            },
          ],
          responses: {
            "200": {
              description:
                "The dataset API for the given version is found and it is accessible to consume.",
              content: {
                "application/json": {
                  schema: {
                    type: "string",
                  },
                },
              },
            },
            "404": {
              description:
                "The combination of dataset name and version is not found in the system or it is not published yet to be consumed by public.",
              content: {
                "application/json": {
                  schema: {
                    type: "string",
                  },
                },
              },
            },
          },
        },
      },
    }, false);

    assertEquals(
      output,
      `
export interface SwaggerApi {
  /**
   * @description This GET API returns the list of all the searchable field names that are in the oa_citations. Please see the 'fields' attribute which returns an array of field names. Each field or a combination of fields can be searched using the syntax options shown below.
   * @summary Provides the general information about the API and the list of fields that can be used to query the dataset.
   * @tag metadata
   */
  get(url: '/{dataset}/{version}/fields', options: RequireKeys<SwaggerOptions<{dataset: string, version: string}, {}, {}, unknown>, 'path'>): Promise<string>
}
`,
    );
  },
});
