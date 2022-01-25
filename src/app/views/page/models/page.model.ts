export class PageModel{
  _id : string;
  label: string;
};

export class QueryResultPage{
  data: PageModel;
  success: boolean;
};
export class QueryResultPages{
  data: PageModel[];
  success: boolean;
};
