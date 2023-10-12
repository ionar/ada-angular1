import { Component } from '@angular/core';
import { Customer } from 'src/app/model/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent {
  customers:Customer[]=[]
  constructor(private customerService: CustomerService) {
    this.customers = customerService.getList()
    
    
  }

}
