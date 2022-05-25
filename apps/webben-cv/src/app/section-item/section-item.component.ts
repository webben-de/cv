import { Component, Input, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { JobStep } from '@webben-cv/api-interfaces';
import { formatDuration, intervalToDuration } from 'date-fns';
import { filter, map, Observable } from 'rxjs';
import { NameState } from '../app.state';

@Component({
  selector: 'webben-cv-section-item',
  templateUrl: './section-item.component.html',
  styleUrls: ['./section-item.component.scss'],
})
export class SectionItemComponent implements OnInit {
  searchTerm!: RegExp;
  date = new Date().toDateString();

  @Input() public step!: JobStep;
  @Input() public active!: boolean;
  @Select(NameState.search) search$!: Observable<string>;
  public get duration() {
    return formatDuration(
      intervalToDuration({ start: this.step.from, end: this.step.to }),
      { format: ['years', 'months'] }
    );
  }
  ngOnInit(): void {
    this.search$.pipe(filter((d) => !!d)).subscribe((d) => {
      this.searchTerm = new RegExp(d, 'ig');
      console.log(this.searchTerm, d);
    });
  }
}
