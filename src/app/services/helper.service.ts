import {Injectable} from '@angular/core';
import * as uuid from "uuid";
import {Condition, DiagnoseOption} from "../models/diagnoses";
import {DatePipe} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(private datePipe: DatePipe) { }

  public createConditions(formValue: any): Condition[] {
      return formValue.diagnoses.map((item: DiagnoseOption) => {
        return [
          {
            id: uuid.v4(),
            context: {
              identifier: {
                type: {
                  coding: [
                    {
                      system: "eHealth/resources",
                      code: "encounter"
                    }
                  ]
                },
                value: item.range.id
              }
            },
            code: {
              coding: [
                {
                  system: 'eHealth/ICPC2/condition_codes',
                  code: item.range.code
                }
              ]
            },
            notes: item.comment,
            onset_date: this.datePipe.transform(new Date(), "yyyy-mm-dd'T'hh:mm:ss'Z'")
          }
        ]
      });
  }

}
