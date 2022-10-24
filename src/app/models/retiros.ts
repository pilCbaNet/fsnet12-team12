export class Retiros {
    date: string;
    mount: number;
    description: string;
    accountNumber: string;
    accountName: string;
  
    constructor(
      date: string,
      mount: any,
      description: string,
      accountNumber: string,
      accountName: string
    ) {
      this.date = date;
      this.mount = mount;
      this.description = description;
      this.accountNumber = accountNumber;
      this.accountName = accountName;
    }
  }