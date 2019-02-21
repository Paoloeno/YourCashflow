export class ExpanseCategory{
  id: number;
  name: string;
  userId: number;
  describtion: string;
  dateOfCreate: Date;

  constructor(name: string, userId: number, describtion: string){
    this.name = name;
    this.userId = userId;
    this.describtion = describtion;
  }
}
