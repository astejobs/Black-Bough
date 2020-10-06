import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  product_id:any;
  product_name;
  product_description;
  product_categorie;
  available_quantity;
  product_weight;
  percentage_discount;
  stock_alert;
  stock_critical;
  comment;
  approuved_by;


  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(product) {
    console.log(product.value);
    Swal.fire('Thank You', 'Product Added Successfully!', 'success');
  }
}
