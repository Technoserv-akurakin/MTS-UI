import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import {RepositoryService} from "./repository.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  questForm: FormGroup;

  creditPeriods = [
    {value: '12', viewValue: '12 мес'},
    {value: '24', viewValue: '24 мес'},
    {value: '36', viewValue: '36 мес'},
    {value: '48', viewValue: '48 мес'},
    {value: '60', viewValue: '60 мес'},
    {value: '72', viewValue: '72 мес'},
    {value: '84', viewValue: '84 мес'},
  ];

  nameCtrl: FormControl;
  filteredStates: any;

  constructor(private fb: FormBuilder, private repositoryService: RepositoryService) {

    console.log(">>> ctor");
    this.nameCtrl = fb.control('', [Validators.required]);
    this.questForm = fb.group({
      creditAmount: ['', [Validators.required, this.numberValidator()]],
      creditPeriod: ['', [Validators.required]],
      name: this.nameCtrl,
      birthDate: ['', [Validators.required]],
      additionalPhone: ['', [Validators.required, this.phoneValidator()]]
    });

    this.filteredStates = this.nameCtrl.valueChanges.startWith(null).map(name => this.filterStates(name));
  }

  ngOnInit(): void {
    console.log(">>> ngOnInit");
  }

  filterStates(val: string) {
    return val ? this.repositoryService.getFioSuggestions(val) : null;
  }

  submit(): void {
    console.log(">>>>>>>>>>>>>>");
    console.log(this.questForm.value);
  }

  private numberValidator(): ValidatorFn {
    const pattern: RegExp = /^[0-9]*$/im;
    return (control: AbstractControl): { [key: string]: any } => {
      if (!(control.dirty || control.touched)) {
        return null;
      } else {
        return pattern.test(control.value) ? null : {custom: `Invalid phone number`};
      }
    };
  }

  private phoneValidator(): ValidatorFn {
    const pattern: RegExp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return (control: AbstractControl): { [key: string]: any } => {
      if (!(control.dirty || control.touched)) {
        return null;
      } else {
        return pattern.test(control.value) ? null : {custom: `Invalid phone number`};
      }
    };
  }
}
