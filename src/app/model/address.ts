import { GoogleAddress } from './googleAddress';

export class Address {
    latitude: string;
    longitude: string;

    constructor (values: Object = {}) {
      Object.assign(this, values);
    }

    static fromGoogleAddress(values: GoogleAddress): Address {
      return new Address({latitude: values.geometry.location.lat, longitude: values.geometry.location.lng});
    }
}
