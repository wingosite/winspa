export interface NewPageProps {
  title?: string;
  path?: string;
}

export interface PageConfig {
  bgColor: string;
  bgImage: string;
  keepAlive: boolean;
}

export interface NewPageReturnType extends NewPageProps {
  config: PageConfig;
}

export interface PageValueProps {
  [key: string]: NewPageReturnType;
}

export interface PageModelValue {
  page: PageValueProps;
  models: any[];
}

export interface StateProps {
  jsonData: any;
  currentPage: any;
}
