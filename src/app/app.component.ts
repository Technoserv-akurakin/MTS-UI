import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import {RepositoryService} from "./repository.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  creditPeriods = [
    {value: '6', viewValue: '6 мес'},
    {value: '12', viewValue: '12 мес'},
    {value: '24', viewValue: '24 мес'},
    {value: '36', viewValue: '36 мес'},
  ];
  creditPeriod: string;

  creditAmount: FormControl;
  creditPeriodCtrl: FormControl;
  stateCtrl: FormControl;


  filteredStates: any;



  constructor(private repositoryService: RepositoryService) {

  }

  ngOnInit(): void {
    this.creditAmount = new FormControl();
    this.creditPeriodCtrl = new FormControl();
    this.stateCtrl = new FormControl();
    this.creditPeriodCtrl.registerOnChange(name => this.onPeriodChange(name));

    this.filteredStates = this.stateCtrl.valueChanges.startWith(null).map(name => this.filterStates(name));
  }

  onPeriodChange(val: string) {
    console.log(val);
  }

  filterStates(val: string) {
    return val ? this.repositoryService.getFioSuggestions(val) : null;
  }

}
