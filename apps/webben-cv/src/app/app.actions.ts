export class SetData {
  static readonly type = '[Job] SetData]';
  constructor(public readonly payload?: any) {}
}

export class setSearch {
  static readonly type = '[Page] setSearch]';
  constructor(public readonly payload?: any) {}
}
