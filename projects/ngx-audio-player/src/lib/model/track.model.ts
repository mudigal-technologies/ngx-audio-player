export class Track {
  index?: number;
  link: string;
  title: string;
  startOffset?: number;
  endOffset?: number;
  public toString = (): string => {
    return `Track (index: ${this.index}, title: ${this.title})`;
  }
}
