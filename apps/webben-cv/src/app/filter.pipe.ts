import { Pipe, PipeTransform } from '@angular/core';
import { JobStep } from '@webben-cv/api-interfaces';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: JobStep[] | null, args: string | unknown): JobStep[] | null {
    if (typeof args === 'string' && value !== null && value) {
      const agg = value
        .map((d) => JSON.stringify(d))
        .filter((d) => d.match(new RegExp(args, 'ig')))
        .map((d) => JSON.parse(d) as JobStep)
        .map((d) => ({ ...d, from: new Date(d.from), to: new Date(d.to) }));

      return agg;
    }

    return value;
  }
}
