import { ExpDirectory } from './exp-directory';

interface ExpDocumentInterface {
  name: string;
  size: number;
  directory: ExpDirectory;
  ext: string;
}

export class ExpDocument implements ExpDocumentInterface {
  public name: string;
  public size: number;
  public directory: ExpDirectory;
  public ext: string;

  constructor(dir) {
    this.name = Math.random().toString(36).substr(2);
    this.size = Math.round(Math.random() * 9999999999);
    this.ext = Math.random().toString(36).substr(2, 3);

    this.directory = dir;
  }
}
