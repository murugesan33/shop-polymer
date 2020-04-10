import { Component, OnInit } from '@angular/core';
import {ProductsService, menWear} from '../products.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ladiesoutwear',
  templateUrl: './ladiesoutwear.component.html',
  styleUrls: ['./ladiesoutwear.component.css']
})
export class LadiesoutwearComponent implements OnInit {
  Products =  [];
  title = `Ladie's Outwear`;
  constructor(private api: ProductsService, private router: Router) { }

  ngOnInit() {
    this.api
    .getProducts()
    .subscribe(data => {
      let arr = [4,5,6];
      for(let item of data){
        if(arr.indexOf(item.id) != -1){
          this.Products.push(item);
        }
      }
    });
    
  }

}
