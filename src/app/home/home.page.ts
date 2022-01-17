import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { provideRoutes } from '@angular/router';
import { Router } from '@angular/router';
import { AdditemPage } from '../Additem/additem.page';
import { additem } from '../item/item.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private router: Router
  ) { }

  goAddItem() {
    this.router.navigate(['additem'])
  }
  
  


  /* itemsCart: any = [];
  addCarrello(category) {
    console.log(category);
    let cartDataNull = localStorage.getItem('localCart');
    if (cartDataNull == null) {
      let storeDataGet: any = [];
      storeDataGet.push(category);
      localStorage.setItem('localCart', JSON.stringify(storeDataGet));

    }
    else {
      var id = category.prodId;
      let index: number = -1;
      this.itemsCart = JSON.parse(localStorage.getItem('localCart'));
      for (let i = 0; i < this.itemsCart.length; i++) {
        if (parseInt(id) === parseInt(this.itemsCart[i].prodId)) {
          this.itemsCart[i].qnt = category.qnt;
          index = i;
          break;
        }
      }
      if (index == -1) {
        this.itemsCart.push(category);
        localStorage.setItem('localCart', JSON.stringify(this.itemsCart))
      }
      else {
        localStorage.setItem('localCart', JSON.stringify(this.itemsCart))
      }
    }
  } */

  ngOnInit(): void {
    this.CartDetails();
    this.prezzototale();
  }


  getCartDetails: any = [];
  CartDetails() {
    if (localStorage.getItem('localCart')) {
      this.getCartDetails = JSON.parse(localStorage.getItem('localCart'));
      console.log(this.getCartDetails);
    }
  }


  addqnttt(prodId, qnt) {
    for(let i=0; i<this.getCartDetails.length; i++){
      if(this.getCartDetails[i].prodId === prodId){
        if(qnt >=1)
        this.getCartDetails[i].qnt = parseInt(qnt) + 1;
      }
    }
    localStorage.setItem('localCart', JSON.stringify(this.getCartDetails));

    this.prezzototale();
    }

    delqnttt(prodId, qnt) {
      for(let i=0; i<this.getCartDetails.length; i++){
        if(this.getCartDetails[i].prodId === prodId){
          if(qnt >=2)
          this.getCartDetails[i].qnt = parseInt(qnt) - 1;
        }
      }
      localStorage.setItem('localCart', JSON.stringify(this.getCartDetails));
  
      this.prezzototale();
      }
      

      total:number=0;
      prezzototale(){
         if(localStorage.getItem('localCart')) {
          this.getCartDetails = JSON.parse(localStorage.getItem('localCart'));
          this.total=this.getCartDetails.reduce(function(acc, val){
            return acc + (val.amt * val.qnt);
          }, 0);
      }
  }
  
  deleteitem(getCartDetail, prodId){
    for(let i=0; i<this.getCartDetails.length; i++){
      if(this.getCartDetails[i].prodId === prodId){
        this.getCartDetails.splice(i, 1);
      }
    }
    localStorage.setItem('localCart', JSON.stringify(this.getCartDetails));

    this.prezzototale();
    }
  }

