import { Component, OnInit } from '@angular/core';
import {ProductsService, menWear} from '../products.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-mensoutwear',
  templateUrl: './mensoutwear.component.html',
  styleUrls: ['./mensoutwear.component.css']
})
export class MensoutwearComponent implements OnInit {
  Products =  [];
  title = `Men's Outwear`;
  constructor(private api: ProductsService, private router: Router) { }

  ngOnInit() {
    this.api
    .getProducts()
    .subscribe(data => {
      let arr = [1,2,3,13,14,15];
      for(let item of data){
        if(arr.indexOf(item.id) != -1){
          this.Products.push(item);
        }
      }
    });
  }

 

}
