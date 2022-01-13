import { GeoCoords } from 'store/reducers/users/_types/GeoCoords';

interface AddressType {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: GeoCoords;
}

export class Address {
  street: string;
  city: string;
  suite: string;
  zipcode: string;
  geo: GeoCoords;
  constructor(address: AddressType) {
    this.street = address.street;
    this.suite = address.suite;
    this.city = address.city;
    this.zipcode = address.zipcode;
    this.geo = new GeoCoords(address.geo);
  }
  toString() {
    return `${this.street} ${this.suite}, ${this.city} ${this.zipcode}`;
  }
}
