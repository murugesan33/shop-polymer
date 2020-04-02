import { Component, OnInit } from '@angular/core';
import {ProductsService, menWear} from '../products.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menstshirts',
  templateUrl: './menstshirts.component.html',
  styleUrls: ['./menstshirts.component.css']
})
export class MenstshirtsComponent implements OnInit {
  Products =  [];
  title = `Men's Tshirts`;
  constructor(private api: ProductsService, private router: Router) { }

  ngOnInit() {
    this.api
    .getProductsDetails()
    .subscribe(data => {
      let arr = [1,2,3];
      for(let item of data){
        if(arr.indexOf(item.id) != -1){
          this.Products.push(item);
        }
      }
    });
  }

}
