import { Component, Input, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { nameToState } from '@ngxs/store/src/internal/internals';
import { Observable } from 'rxjs';
import { JobStep } from '@webben-cv/api-interfaces';
import { NameState } from '../../app.state';

@Component({
  selector: 'webben-cv-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent {
  @Input() mouseover: any;
  @Input() active: any;
  @Select(NameState.jobs) jobs!: Observable<JobStep[]>;
  @Select(NameState.search) search$!: Observable<string>;
}
