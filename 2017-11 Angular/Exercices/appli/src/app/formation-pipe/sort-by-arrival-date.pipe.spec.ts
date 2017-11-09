import { SortByArrivalDatePipe } from './sort-by-arrival-date.pipe';

describe('SortByArrivalDatePipe', () => {
  it('create an instance', () => {
    const pipe = new SortByArrivalDatePipe();
    expect(pipe).toBeTruthy();
  });
});
