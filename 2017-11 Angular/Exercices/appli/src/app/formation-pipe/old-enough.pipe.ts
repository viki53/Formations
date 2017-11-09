import { Pipe, PipeTransform } from '@angular/core';

import { Pupil } from '../_models/all';

@Pipe({
  name: 'oldEnough'
})
export class OldEnoughPipe implements PipeTransform {

  transform(pupils: Pupil[], minAge: number = 18): Pupil[] {
    return pupils.filter(pupil => pupil.age > minAge);
  }

}
