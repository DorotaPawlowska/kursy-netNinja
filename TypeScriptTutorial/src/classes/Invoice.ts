
// classes
export class Invoice {
  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ){}

  format(){
    // this.client = 'else'; // CANT
    return `${this.client} owes $${this.amount} for ${this.details}`;
  }
}