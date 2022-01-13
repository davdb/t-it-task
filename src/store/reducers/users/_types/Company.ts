interface CompanyType {
  name: string;
  catchPhrase: string;
  bs: string;
}

export class Company {
  name: string;
  catchPhrase: string;
  bs: string;

  constructor(company: CompanyType) {
    this.name = company.name;
    this.catchPhrase = company.catchPhrase;
    this.bs = company.bs;
  }
  toString() {
    return this.name;
  }
}
