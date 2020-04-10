import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpEventType} from '@angular/common/http';
import {Observable,BehaviorSubject} from 'rxjs';

const localUrl = 'http://localhost:3000';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
  reportProgress:true,
  Observe:'events'
};

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  public log = new BehaviorSubject<boolean>(false);
  
  public uname = new BehaviorSubject<string>('');
  
  public uId =  new BehaviorSubject<number>(0);
  
  public err = new BehaviorSubject<string>('');

  public item = new BehaviorSubject<number>(0);

  public productItem = new BehaviorSubject<any>([]);

  public totalItems = new BehaviorSubject<number>(0);

  constructor(private http:HttpClient) { }


  getUserDetails(){
    return this.http.get(localUrl+'/posts');
  }

  setUserDetails(arr){
      return this.http.post(localUrl+'/posts',arr,httpOptions);
  }

  getProducts(){
    return this.http.get<menWear[]>(localUrl+'/products');
  }
  setUserProductsLists(arr){
    return this.http.post(localUrl+'/productslist', arr, httpOptions);
  }

}


export interface menWear {
  id?:number;
  name: string;
  price: number;
  image:string;
  description:string;
  features:string;
}

export interface UserDeatils {
  id?: number;
  fullname: string;
  username: string;
  password: string;
  email: string;
  address:string;
}

export interface checkOut{
  id:number,
  Quantity:number
}

