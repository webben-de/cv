import { Pipe, PipeTransform } from '@angular/core';
import { formatDuration, intervalToDuration } from 'date-fns';
import { JobStep } from '@webben-cv/api-interfaces';

@Pipe({
  name: 'duration',
})
export class DurationPipe implements PipeTransform {
  transform(value: JobStep[] | null): string {
    if (value === null || !value) return '';
    const durationagged = value
      .map((step) => intervalToDuration({ start: step.from, end: step.to }))
      .reduce(
        (prev, cur) => ({
          years: (prev.years || 0) + (cur.years || 0),
          months: (prev.months || 0) + (cur.months || 0),
          weeks: (prev.weeks || 0) + (cur.weeks || 0),
          days: (prev.days || 0) + (cur.days || 0),
          minutes: (prev.minutes || 0) + (cur.minutes || 0),
          seconds: (prev.seconds || 0) + (cur.seconds || 0),
        }),
        { years: 0, months: 0, days: 0, minutes: 0, seconds: 0 }
      );
    const calc: Duration = {
      ...durationagged,
    };
    calc.months = Math.round(
      ((durationagged.months || 0) % 12) + (durationagged.days || 0) / 20
    );
    calc.years = Math.round(
      (durationagged.years || 0) + (durationagged.months || 0) / 12
    );
    // calc.days = durationagged.days || 0;
    return formatDuration(calc, {
      format: ['years', 'weeks', 'months'],
    });
  }
}
