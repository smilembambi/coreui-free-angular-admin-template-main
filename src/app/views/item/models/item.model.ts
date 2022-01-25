export class ItemModel{
  _id : string;
  label: string;
  content: string;
};

export class QueryResultItem{
  data: ItemModel;
  success: boolean;
};
export class QueryResultItems{
  data: ItemModel[];
  success: boolean;
};

