import { ProductsService } from './../products.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css']
})
export class HeadersComponent implements OnInit {
  username = '';
  logKey = false;
  userId = 0;
  item = 0;
  constructor(private router:Router, private api :ProductsService) {
    this.api.log.subscribe(data => this.logKey = data);
    this.api.uname.subscribe(data => this.username = data);
    this.api.item.subscribe(data =>{this.item = data});

    if(JSON.parse(sessionStorage.getItem('item'))){
      this.item = JSON.parse(sessionStorage.getItem('item'));
    }
    if(localStorage.getItem('userName')){
       this.username = localStorage.getItem('userName');
       this.logKey = Boolean(localStorage.getItem("log"));
       this.api.uId.next(parseInt(localStorage.getItem('userId')));
       this.api.log.next(Boolean(localStorage.getItem("log")));
    }
  }

 

  ngOnInit() {
  }

  signOut() {
    this.api.log.next(false);
    this.api.uname.next('');
    this.api.uId.next(0);
    this.api.err.next('');
    localStorage.removeItem('userName');
    localStorage.removeItem('log');
    localStorage.removeItem('userId');
    sessionStorage.clear();
    // this.api.productItem.next([]);
    this.router.navigate(['home']);
  }

}
