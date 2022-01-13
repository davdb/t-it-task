interface GeoCoordsType {
  lat: string;
  ltd: string;
}

export class GeoCoords {
  lat: string;
  ltd: string;
  constructor(geo: GeoCoordsType) {
    this.lat = geo.lat;
    this.ltd = geo.ltd;
  }
  toString() {
    return `Geo coords: (lat: ${this.lat}, ltd: ${this.ltd})`;
  }
}
