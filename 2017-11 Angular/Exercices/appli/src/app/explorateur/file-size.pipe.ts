import { Pipe, PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Pipe({
  name: 'fileSize'
})
export class FileSizePipe implements PipeTransform {
  constructor(private numberPipe: DecimalPipe) {}

  transform(value: number, args?: any): any {
    const kB = value / 1024;
    const mB = kB / 1024;
    const gB = mB / 1024;

    if (gB > 1) {
      return this.numberPipe.transform(gB, '1.1-1') + ' Go';
    }
    if (mB > 1) {
      return this.numberPipe.transform(mB, '1.1-1') + ' Mo';
    }
    if (kB > 1) {
      return this.numberPipe.transform(kB, '1.1-1') + ' ko';
    }
    return value + ' octets';
  }

}
