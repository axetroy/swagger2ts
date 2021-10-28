export function isValidVarName(name: string): boolean {
  return /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(name);
}
