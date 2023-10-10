export interface Diagnoses {
  encounter: {date: string | null};
  conditions?: Condition[];
}

export interface Condition {
  id: string;
  context: {identifier: Identifier};
  code: string;
  notes: string;
  onset_date: string;
}

export interface Identifier {
  type: string;
  value: number;
}

export interface DiagnoseOption {
  comment: string;
  range: {id: number; code: string}
}
