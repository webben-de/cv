import { Action, Selector, State, StateContext } from '@ngxs/store';
import { JobStep } from '../../../../libs/api-interfaces/src';
import { SetData, setSearch } from './app.actions';
import { jobs } from './jobdb';
export interface NameStateModel {
  jobs: JobStep[];
  person: unknown;
  page_search_pattern: string | null;
}

@State<NameStateModel>({
  name: 'webben_state',
  defaults: {
    page_search_pattern: null,
    jobs: jobs,
    person: {},
  },
})
export class NameState {
  @Selector() static jobs(state: NameStateModel) {
    return [...state.jobs].sort((a, b) => b.to.getTime() - a.to.getTime());
  }
  @Selector() static search(state: NameStateModel) {
    return state.page_search_pattern;
  }
  @Action(SetData) setData(ctx: StateContext<NameStateModel>, action: SetData) {
    ctx.setState({
      ...ctx.getState(),
      jobs: action.payload,
    });
  }
  @Action(setSearch) setSearch(
    ctx: StateContext<NameStateModel>,
    action: setSearch
  ) {
    console.log(action.payload);

    ctx.setState({
      ...ctx.getState(),
      page_search_pattern: action.payload,
    });
  }
}
