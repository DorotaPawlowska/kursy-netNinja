// classes
export class Invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        // this.client = 'else'; // CANT
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
