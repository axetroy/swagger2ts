export class BaseGenerator {
  public indent = 0;
  private indentBase = 2;
  private content = "";
  public EOL = "\n";

  /**
   * 获取当前缩进的字符串
   */
  public get indentStr() {
    return " ".repeat(this.indent * this.indentBase);
  }

  public trimEnd() {
    this.content = this.content.trimEnd();
  }

  /**
   * 写入
   * @param str 字符串
   */
  public write(str: string) {
    this.content += str;
  }

  /**
   * 写入字符串并且换行
   * @param str 字符串
   */
  public writeln(str: string) {
    this.content += this.indentStr + str + this.EOL;
  }

  /**
   * 输出字符串
   */
  public toString() {
    return this.content;
  }
}

export interface Block {
  start(): void;
  end(): void;
}
