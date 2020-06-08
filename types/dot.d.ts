type Matchable = RegExp | string;

interface TemplateSettings {
  evaluate: Matchable;
  interpolate: Matchable;
  encode: Matchable;
  use: Matchable;
  useParams: Matchable;
  define: Matchable;
  defineParams: Matchable;
  conditional: Matchable;
  iterate: Matchable;
  varname: string;
  strip: boolean;
  append: boolean;
  selfContained: boolean;
  doNotSkipEncoded: boolean;
}

interface Dot {
  name: string;
  version: string;
  templateSettings: TemplateSettings;
  log: boolean;

  encodeHTMLSource(doNotSkipEncoded: boolean): string;
  template(tmpl: string, c: TemplateSettings, def: any): string;
  compile(tmpl: string, def: any);
}

declare const dot: Dot;
export = dot;
