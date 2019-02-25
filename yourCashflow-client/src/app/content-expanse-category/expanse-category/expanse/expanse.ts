export class Expanse {
  id: number;
  name: string;
  categoryId: number;
  describtion: string;
  amount: number;
  dateOfTransaction: Date;

  constructor(name?: string,
              categoryId?: number,
              describtion?: string,
              amount?: number,
              dateOfTransaction?: Date){
    this.name = name;
    this.categoryId = categoryId;
    this.describtion = describtion;
    this.amount = amount;
    this.dateOfTransaction = dateOfTransaction;
  }
}
