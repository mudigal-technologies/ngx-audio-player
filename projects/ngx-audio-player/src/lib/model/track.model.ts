export class Track {
  index?: number;
  link: string;
  title: string;
  startOffset?: number;
  endOffset?: number;
  duration?: number;
  artist?: string;
  public toString = (): string => {
    return `Track (index: ${this.index}, title: ${this.title})`;
  }
}
