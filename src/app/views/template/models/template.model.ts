export class TemplateModel{
  _id : string;
  label: string;
};

export class QueryResultTemplate{
  data: TemplateModel;
  success: boolean;
};
export class QueryResultTemplates{
  data: TemplateModel[];
  success: boolean;
};
