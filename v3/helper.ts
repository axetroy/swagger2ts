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

/**
 * @description get lines of a text
 */
export function linesOfText(txt: string): string[] {
  return txt.replace(/\r\n|\n\r|\n|\r/g, "\n").split(/\n/g);
}

export function indentTxt(txt: string, indent: number): string {
  const arrayOfLines = linesOfText(txt);

  return arrayOfLines.map((line) => " ".repeat(indent) + line).join("\n");
}
