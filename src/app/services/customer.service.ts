import { Injectable } from '@angular/core';
import { Customer } from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customers:Customer[] = []

  constructor() { 

    let customer = <Customer>{
      id: 1,
      name: "Carlos",
      email: "carlos@carlos.com",
      dateOfBirth: new Date("1984-06-18")
    }
    let customer2 = <Customer>{
      id: 2,
      name: "Ionar",
      email: "ionar@pm.me",
      dateOfBirth: new Date("1984-02-02")
    }
    let customer3 = <Customer>{
      id: 3,
      name: "João",
      email: "joao@uol.com",
      dateOfBirth: new Date("1980-01-02")
    }

    this.customers.push(customer)
    this.customers.push(customer2)
    this.customers.push(customer3)
  }

  getList(){
    return this.customers;
  }

  getById(id: number): Customer {
    const index = this.customers.findIndex(customer => customer.id === id);
    return this.customers[index];
  }

  add(customer:Customer) {
    this.customers.push(customer);
  }

  update(customer:Customer) {

  }

  delete(id:number){

  }
}
