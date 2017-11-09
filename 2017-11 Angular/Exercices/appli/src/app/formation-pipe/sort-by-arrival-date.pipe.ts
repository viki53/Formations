import { Pipe, PipeTransform } from '@angular/core';

import { Pupil } from '../_models/all';

@Pipe({
  name: 'sortByArrivalDate'
})
export class SortByArrivalDatePipe implements PipeTransform {

  transform(pupils: Pupil[], arrivalDateSort: 'ASC' | 'DESC' = 'ASC'): Pupil[] {
    return pupils.sort((a: Pupil, b: Pupil) => {
      if (a.arrivalDate > b.arrivalDate) {
        return arrivalDateSort === 'ASC' ? -1 : +1;
      }
      if (a.arrivalDate < b.arrivalDate) {
        return arrivalDateSort === 'ASC' ? +1 : -1;
      }
      return 0;
    });
  }

}
