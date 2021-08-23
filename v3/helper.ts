/**
 * Generate comments
 * @param comments
 * @param indent
 * @returns
 */
export function generateMultipleLineComments(comments: string[]): string {
  if (!comments.length) return "";

  let raw: string[] = ["/**"];

  comments.forEach((comment, index) => {
    raw.push(` * ${comment}`);
  });

  raw.push(" */");

  return raw.join("\n");
}

export function indentTxt(txt: string, indent: number): string {
  const arrayOfLines = txt.match(/[^\r\n]+/g);

  if (!arrayOfLines) return txt

  return arrayOfLines.map((line) => " ".repeat(indent) + line).join("\n");
}
