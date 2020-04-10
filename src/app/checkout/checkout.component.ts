import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  public arrObjectItem = [];
  public arrItem = [];
  public arrSesItem = [];
  public arrBehItem = [];
  total = 0;
  itemQnty = 1;

  constructor(private api: ProductsService, private router: Router) {
    if (!this.api.log.value) {
      this.api.err.next("Please Login!");
      this.router.navigate(['login']);
    } else {
      this.api.err.next("");
    }
  }

  ngOnInit() {
    this.getCheckOutList();
  }

  getCheckOutList() {
    if (sessionStorage.length > 0) {
      this.arrSesItem = JSON.parse(sessionStorage.getItem('products'));
    }
    this.api.productItem.subscribe((data) => {
      this.arrBehItem = data;
    });
    this.arrItem = [...this.arrSesItem, ...this.arrBehItem]
    for (let i = 0; i < this.arrItem.length; i++) {
      this.total = Number((this.total + this.arrItem[i]['subtotal']).toFixed(2));
      this.arrObjectItem.push(this.arrItem[i]);
    }
    sessionStorage.setItem('products', JSON.stringify(this.arrObjectItem));
    sessionStorage.setItem('item', JSON.stringify(this.arrObjectItem.length));
    this.api.productItem.next(this.arrObjectItem);
    this.api.item.next(this.arrObjectItem.length);
  }

  deleteProduct(id) {
    this.total = 0;
    let filteredItems = this.arrItem.filter((item) => item.id != id);
    sessionStorage.setItem('products', JSON.stringify(filteredItems));
    sessionStorage.setItem('item', JSON.stringify(filteredItems.length));
    this.api.productItem.next(filteredItems);
    this.api.item.next(filteredItems.length);
    this.arrItem = filteredItems;
    this.arrObjectItem = filteredItems;
    for (let i = 0; i < filteredItems.length; i++) {
      this.total = Number((this.total + filteredItems[i]['subtotal']).toFixed(2));
    }
  }

  checkOutData() {
    let status = false;
    const userId = (this.api.uId.value) ? this.api.uId.value : localStorage.getItem('userId');
    for (let item of this.arrItem) {
      let arrItem = {
        petId: item.id,
        userId: userId,
        quantity: parseInt(item.qnty)
      }
      this.api.setUserProductsLists(arrItem).subscribe(data => {
        status = true;
      });
    }
    setTimeout((status) => {
      this.arrObjectItem = [];
      this.arrItem = [];
      sessionStorage.clear();
      this.api.productItem.next([]);
      this.api.item.next(0);
      this.router.navigate(['home']);
    }, 5000);
  }

  getQnty(e, pId) {
    this.total = 0;
    for (let i = 0; i < this.arrItem.length; i++) {
      if (this.arrItem[i]['id'] === pId) {
        this.arrItem[i]['qnty'] = e;
        this.arrItem[i]['subtotal'] = Number((this.arrItem[i]['price'] * e).toFixed(2));
      }
      this.total = Number((this.total + this.arrItem[i]['subtotal']).toFixed(2));
    }
    setTimeout(() => {
      sessionStorage.setItem('products', JSON.stringify(this.arrItem));
      sessionStorage.setItem('item', JSON.stringify(this.arrItem));
      this.api.productItem.next(this.arrItem);
      this.api.item.next(this.arrItem.length);
      this.arrItem = this.arrItem;
      this.arrObjectItem = this.arrItem;
    }, 5000);
  }


}
