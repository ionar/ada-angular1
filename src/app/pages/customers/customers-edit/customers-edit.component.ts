import { Component } from '@angular/core';
import { Customer } from 'src/app/model/customer';
import { CustomerService } from 'src/app/services/customer.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'; 

@Component({
  selector: 'app-customers-edit',
  templateUrl: './customers-edit.component.html',
  styleUrls: ['./customers-edit.component.css']
})
export class CustomersEditComponent {
  currentCustomer: Customer | null = null;
  constructor(
    private route: ActivatedRoute,
    // private router: Router,
    // private service: HeroService
    private service: CustomerService
  ) {}
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.currentCustomer = this.service.getById(parseInt(id));
    }
    
  }
}
