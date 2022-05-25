import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable, tap, map } from 'rxjs';
import { setSearch } from '../app.actions';

@Component({
  selector: 'webben-cv-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public attendy_name = 'Benjamin Geißler';
  guest: Observable<string>;
  search!: string;
  constructor(private router: ActivatedRoute, private readonly store: Store) {
    this.guest = this.router.queryParams.pipe(map((d) => d['guest']));
  }
  public get inits() {
    return this.attendy_name
      .split(' ')
      .map((d) => d[0])
      .join('');
  }

  onSearchChange($event: any) {
    this.store.dispatch(new setSearch($event));
  }
}
