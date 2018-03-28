import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddressSearcherComponent } from './address-searcher/address-searcher.component';
import { AddressService } from './services/address.service';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    AddressSearcherComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    AddressService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
