import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Address } from '../model/address';

@Injectable()
export class AddressService {

  static server = ' https://maps.googleapis.com/';
  constructor(private http: Http) { }

  getAddress (address: string): Observable<Address[]> {
    const key = 'key=AIzaSyAtN6vcgXXfvQLWjiUzxqQlZ6SrDpn7GbQ';
    const url = '/maps/api/geocode/json?address=';
    return this.http.get(`${AddressService.server}${url}${address}&${key}`)
      .map((res: Response) => res.json().results.map (
        elem => Address.fromGoogleAddress(elem))
    );

  }
}


