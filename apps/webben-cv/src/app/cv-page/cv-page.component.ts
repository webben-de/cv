import { Component } from '@angular/core';
import { JobStep } from '@webben-cv/api-interfaces';
import { jobs } from '../jobdb';
import { Select, Store } from '@ngxs/store';
import { NameState } from '../app.state';
import { SetData, setSearch } from '../app.actions';
import { Observable, tap } from 'rxjs';
@Component({
  templateUrl: './cv-page.component.html',
  styleUrls: ['./cv-page.component.scss'],
})
export class CvPageComponent {
  @Select(NameState.search) public search$!: Observable<string>;
  @Select(NameState.jobs) public steps!: Observable<JobStep[]>;
  mouseover: any;
  active: any;
  search = '';
  constructor(private readonly store: Store) {
    this.search$.subscribe((d) => (this.search = d));
    this.steps.pipe(tap((d) => console.log(d)));
  }
  handleSearchChange($event: unknown) {
    this.store.dispatch(new setSearch($event));
  }
}
