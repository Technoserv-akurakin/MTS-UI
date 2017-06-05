import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

import {AppComponent} from "./app.component";
import {MaterialModule, MdDatepickerModule} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpService} from "./http.service";
import {RepositoryService} from "./repository.service";
import {FlexLayoutModule} from "@angular/flex-layout";

@NgModule({
  imports: [MaterialModule,
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
  providers: [HttpService, RepositoryService]
})
export class AppModule { }
