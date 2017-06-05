import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

import {AppComponent} from "./app.component";
import {
  DateAdapter,
  MaterialModule, MD_DATE_FORMATS, MD_NATIVE_DATE_FORMATS, MdDatepickerModule,
  MdNativeDateModule, NativeDateAdapter
} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpService} from "./http.service";
import {RepositoryService} from "./repository.service";
import {FlexLayoutModule} from "@angular/flex-layout";

@NgModule({
  imports: [MaterialModule,
    MdNativeDateModule,
    MdDatepickerModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent],
  providers: [HttpService, RepositoryService, {provide: DateAdapter, useClass: NativeDateAdapter},
    {provide: MD_DATE_FORMATS, useValue: MD_NATIVE_DATE_FORMATS}]
})
export class AppModule { }
