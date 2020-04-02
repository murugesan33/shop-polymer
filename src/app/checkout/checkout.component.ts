import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../products.service';
import {Router} from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  public arrObjectItem = [];
  public arrItem = [];
  total=0;
  quantity=1;
  // quantityformcontrol:FormControl;
  constructor(private api:ProductsService, private router: Router) { 
    if(!this.api.log.value){
      this.api.err.next("Please Login!");
      this.router.navigate(['login']);
     }else{
      this.api.err.next("");
      this.arrItem =((this.api.productItem.value.length > 0) ? this.api.productItem.value : JSON.parse(sessionStorage.getItem('products')));
     }
     this.total = this.api.totalItems.value;
  }

  ngOnInit() {
      this.getCheckOutList();
      // this.quantityformcontrol=new FormControl();
  }

  getCheckOutList(){
    if(this.arrItem!=null){
      this.api.getProductsDetails().subscribe(data=>{
         for(let item of data){
              for(let it of this.arrItem){
                if(it.id == item.id){
                  item['quantity'] = it.Quantity;
                  console.log(item.price);
                  this.total = this.total + item.price;
                  this.arrObjectItem.push(item)
                }
              }
          }
      })
    }
  }

  deleteProduct(id){
    let filteredItems  = this.arrItem.filter((item) => item.id != id );
    sessionStorage.setItem('products',JSON.stringify(filteredItems));
    sessionStorage.setItem('item',JSON.stringify(filteredItems.length));
    this.api.productItem.next(filteredItems);
    this.api.item.next(filteredItems.length);
    this.arrItem = filteredItems;
    this.arrObjectItem = [];
    this.getCheckOutList();
  }

  checkOutData(){
    let status = false;
    const userId = (this.api.uId.value) ? this.api.uId.value : localStorage.getItem('userId');
    //console.log(this.arrItem);
  //  console.log(this.arrObjectItem);

   
  for(let item of this.arrItem){
       let arrItem = {
         petId:item.id,
         userId:userId,
         quantity:item.Quantity
       }
      this.api.setUserProductsLists(arrItem).subscribe(data => {
          status = true;
      });
    }
    setTimeout((status)=> {
      this.arrObjectItem = [];
      this.arrItem =[];
      sessionStorage.clear();
      this.api.productItem.next([]);
      this.api.item.next(0);
      this.router.navigate(['home']);
    }, 5000);
  }


  totalCount(el, obj){
    let count = el.target.value;
    let itemVl = obj.price;
    this.total = count * itemVl;
  } 
}
