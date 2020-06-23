export class Track {
  index?: number;
  link: string;
  title: string;
  public toString = (): string => {
    return `Track (index: ${this.index}, title: ${this.title})`;
  }
}
