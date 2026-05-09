import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'fbTimestamp'
})
export class FbTimestampPipe implements PipeTransform {

  constructor(private datePipe: DatePipe) { }

  transform(value: string | null | undefined): string | null {
    if (!value) return null;
    return this.datePipe.transform(value, 'mediumDate');
  }


}
