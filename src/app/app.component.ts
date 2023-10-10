import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Observable} from 'rxjs';
import {ApiService} from "./services/api.service";
import {Diagnoses} from "./models/diagnoses";
import {HelperService} from "./services/helper.service";
import {Range} from "./models/ranges";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  public form: FormGroup;
  public diagnoses: FormArray<FormGroup>;
  public $ranges: Observable<Range[]>;
  public result: Diagnoses;
  public minDate: Date;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private helperService: HelperService,
  ) {}

  ngOnInit() {
    this.minDate = new Date();
    this.setRanges();
    this.initForm();
    this.addItem();
  }

  public addItem(): void {
    this.diagnoses = this.form.get('diagnoses') as FormArray;
    this.diagnoses.push(this.createItem());
  }

  public onBuildJSON(): void {
    const formValue = this.form.getRawValue();
    const isAtLeastOneSelected = formValue.diagnoses[0]?.range.id;
    const encounter = {date: formValue.date?.toLocaleDateString() || null};

    if (isAtLeastOneSelected) {
      const conditions = this.helperService.createConditions(formValue)
      this.result = {encounter, conditions}
    } else {
      this.result = {encounter}
    }
  }

  private initForm(): void {
    this.form = new FormGroup({
      date: new FormControl(),
      diagnoses: new FormArray([])
    });
  }

  private createItem(): FormGroup {
    return this.formBuilder.group({
      range: '',
      comment: '',
    });
  }

  private setRanges(): void {
    this.$ranges = this.apiService.getRanges();
  }

}
