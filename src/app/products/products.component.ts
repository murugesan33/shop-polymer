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

  ngOnInit() {}

 
}
