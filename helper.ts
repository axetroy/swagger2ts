/**
 * cover URL to filepath
 * @param fileURL
 * @returns
 */
export function URL2filepath(fileURL: URL): string {
  // Unix: file:///home/runner/work/swagger2ts/swagger2ts/test.ts
  // Windows: file:///D:/a/swagger2ts/swagger2ts/test.ts
  const reg = Deno.build.os === "windows" ? /^file:\/\/\// : /^file:\/\//;

  return fileURL.toString().replace(reg, "");
}
