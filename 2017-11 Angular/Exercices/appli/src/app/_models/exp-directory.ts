import { ExpDocument } from './exp-document';

interface ExpDirectoryInterface {
  name: string;
  files: ExpDocument[];
}

export class ExpDirectory implements ExpDirectoryInterface {
  public name: string;
  public files: ExpDocument[] = [];

  constructor() {
    this.name = Math.random().toString(36).substr(2);

    for (let i = 0; i < Math.round(1 + Math.random() * 20); i++) {
      this.files.push(new ExpDocument(this));
    }
  }

  public removeFile(doc) {
    this.files.forEach((file, i) => {
       if (doc === file) {
         this.files.splice(i, 1);
       }
    });
  }
}
