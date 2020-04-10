import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  pId;
  products = [];
  logKey = this.api.log.value;
  userId = this.api.uId.value;
  arrItem = [];
  itemQnty = 1;
  itemSize = 'M';
  constructor(private route: ActivatedRoute, private api: ProductsService, private router: Router) {
    this.route.paramMap.subscribe((params) => {
      this.pId = params.get('id');
    });
  }

  ngOnInit() {
    this.api.getProducts().subscribe(data => {
      let arr = [parseInt(this.pId)];
      for (let item of data) {
        if (arr.indexOf(item.id) != -1) {
          this.products.push(item);
        }
      }
    });
  }

  buyProduct() {
    this.arrItem.push(this.products[0]);
    this.arrItem[0]['qnty'] = this.itemQnty;
    this.arrItem[0]['size'] = this.itemSize;
    this.arrItem[0]['subtotal'] = Number((this.arrItem[0]['price'] * this.itemQnty).toFixed(2));
    if (!this.logKey) {
      this.api.err.next("Please Login!");
      this.router.navigate(['login']);
    } else {
      this.api.productItem.next(this.arrItem);
      this.api.item.next(this.arrItem.length);
      this.router.navigate(['checkout']);
    }
  }

  getQnty(e) {
    this.itemQnty = parseInt(e);
  }

  getSize(e) {
    this.itemSize = e;
  }

}
