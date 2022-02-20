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
   * 丢弃最后 N 行的空白行
   */
  public dropLastEmptyLine(n: number) {
    if (n <= 0) return;

    while (n > 0) {
      this.content = this.content.replace(new RegExp(this.EOL + "$"), "");
      n--;
    }
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
