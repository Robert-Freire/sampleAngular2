import { Component, OnInit } from '@angular/core';
import { Address } from '../model/address';
import { AddressService } from '../services/address.service';
import { FormControl } from '@angular/forms/src/model';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-address-searcher',
  templateUrl: './address-searcher.component.html',
  styleUrls: ['./address-searcher.component.css']
})

export class AddressSearcherComponent implements OnInit {

  private addressUpdated: Subject<string> = new Subject<string>();
  private isError = false;
  private error = '';
  private search = '';
  private address: Address = {
    latitude : '',
    longitude: ''
  };

  constructor(private addressService: AddressService) {
  }

  ngOnInit() {
    this.addressUpdated.asObservable()
    .debounceTime(300)
    .distinctUntilChanged().subscribe( (searchString) => {
      if (searchString) {
        this.doSearch (searchString);
       }
      });
  }

  private doSearch (searchString) {
    this.addressService.getAddress((searchString)).subscribe((result) => {
      if (result.length === 0) {
        this.showError( `Address ${searchString} not found`);
      } else {
        this.showError( '');
        return this.address = result[0];
      }
    }, error => {
      this.showError(error.json().error_message);
    });
  }
  private showError (message: string) {
    this.error = message;
    this.isError = !!message;
  }

  private searchAddress(value: string) {
    this.addressUpdated.next(value);
  }

}
