import { ProductsService } from './../products.service';
import { Component, OnInit,Input } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  logKey = this.api.log.value;
  userId = this.api.uId.value;
  arrItem = [];
  @Input('products') products = [];
  @Input('title') title:string='';
  constructor(private api:ProductsService, private router: Router) { }

  ngOnInit() {
  }

  buyProduct(id){
    let merged = false;
    let prdValue = JSON.parse(sessionStorage.getItem('products'));
    if(!this.logKey){
       this.api.err.next("Please Login!");
       this.router.navigate(['login']);
     }else{
      let arr = {};
     if(prdValue!= null){
      this.api.productItem.next(prdValue);
     }
     this.arrItem = this.api.productItem.value;
     if(this.arrItem.length > 0){
          for(let i= 0;i<this.arrItem.length;i++){
              if(this.arrItem[i].id == id){
                this.arrItem[i].id = id;
                this.arrItem[i].Quantity = this.arrItem[i].Quantity + 1;
                  merged = true;
            }
          }
      }
      if(!merged){
        arr ={
          "id":id,
          "Quantity":1
         };
          this.arrItem.push(arr);
      }
      sessionStorage.setItem('products',JSON.stringify(this.arrItem));
      sessionStorage.setItem('item',JSON.stringify(this.arrItem.length));
      this.api.productItem.next(this.arrItem);
      this.api.item.next(this.arrItem.length);
     }
    console.log(id);
  }

}
