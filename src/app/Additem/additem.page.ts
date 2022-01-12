import { Component, Injectable, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { additem } from '../item/item.model';
@Component({
  selector: 'app-additem',
  templateUrl: './additem.page.html',
  styleUrls: ['./additem.page.scss'],
})
export class AdditemPage implements OnInit {
  additem = new additem()
   key : any = 0;

   itemsCart:any = [];
  productArray :any= [
    /* {
      prodId: 0,
      name: "Mele",
      img: " ./assets/mele.jpg ",
      qnt: 1,
      amt: 2
    },

    {
      prodId: 1,
      name: "Latte",
      img: " ./assets/latte.jpeg ",
      qnt: 1,
      amt: 1.20
    },

    {
      prodId: 2,
      name: "Tonno",
      img: " ./assets/tonno.jpg ",
      qnt: 1,
      amt: 0.60
    },

    {
      prodId: 3,
      name: "Uova",
      img: " ./assets/uova.jpeg ",
      qnt: 1,
      amt: 0.5
    } */
  ];


  constructor() { }


  ngOnInit() {
    let cartDataNull = localStorage.getItem('localCart');
    this.additem= new additem()
    
    this.productArray.push(this.additem);
  


  }


  onselectFile(e){
    if(e.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=(event:any)=>{
        this.additem.img=event.target.result;
      }
    }

  }


  onsubmit(){
    
  //  this.productArray.push(this.additem);
  
  

   
     let cartDataNull = localStorage.getItem('localCart');
   if(cartDataNull == null){
       let storeDataGet:any = [];
       this.additem.prodId=0;
       storeDataGet.push(this.additem);
        localStorage.setItem('localCart' , JSON.stringify(storeDataGet));
       
     }else




     /* else{ */
       /* var id = this.additem.prodId; */
       /* let index:number = -1; */
       this.itemsCart = JSON.parse(localStorage.getItem('localCart'));
       /* for(let i=0; i<this.itemsCart.length; i++){
        if(parseInt(id) === parseInt(this.itemsCart[i].prodId)){
           this.itemsCart[i].qnt = this.additem.qnt;
           index = i;
           break;
         }
       } */
      
       for(let i=0; i<this.itemsCart.length; i++){
        this.additem.prodId=i+1;
       }



       /* if(index == -1){ */

         this.itemsCart.push(this.additem);
         localStorage.setItem('localCart' , JSON.stringify(this.itemsCart))
         
       /* } */
       /* else{
        localStorage.setItem('localCart' , JSON.stringify(this.itemsCart))
       } */
     }
   } 
   





   
  /*   console.log(this.productArray);
    localStorage.setItem('localcart' , JSON.stringify(this.productArray)); */
   /* } */

    /* itemsCart:any = [];
   addCarrello(category){
   console.log(this.additem);
     let cartDataNull = localStorage.getItem('localCart');
   if(cartDataNull == null){
       let storeDataGet:any = [];
       storeDataGet.push(this.additem);
        localStorage.setItem('localCart' , JSON.stringify(storeDataGet));
       
     }
     else{
       var id = this.additem.prodId;
       let index:number = -1;
       this.itemsCart = JSON.parse(localStorage.getItem('localCart'));
       for(let i=0; i<this.itemsCart.length; i++){
        if(parseInt(id) === parseInt(this.itemsCart[i].prodId)){
           this.itemsCart[i].qnt = this.additem.qnt;
           index = i;
           break;
         }
       }
       if(index == -1){
         this.itemsCart.push(this.additem);
         localStorage.setItem('localCart' , JSON.stringify(this.itemsCart))
       }
       else{
        localStorage.setItem('localCart' , JSON.stringify(this.itemsCart))
       }
     }
   }  */
  


   /*  itemsCart:any = [];
   addCarrello(category){
   console.log(category);
     let cartDataNull = localStorage.getItem('localCart');
   if(cartDataNull == null){
       let storeDataGet:any = [];
       storeDataGet.push(category);
        localStorage.setItem('localCart' , JSON.stringify(storeDataGet));
       
     }
     else{
       var id = category.prodId;
       let index:number = -1;
       this.itemsCart = JSON.parse(localStorage.getItem('localCart'));
       for(let i=0; i<this.itemsCart.length; i++){
        if(parseInt(id) === parseInt(this.itemsCart[i].prodId)){
           this.itemsCart[i].qnt = category.qnt;
           index = i;
           break;
         }
       }
       if(index == -1){
         this.itemsCart.push(category);
         localStorage.setItem('localCart' , JSON.stringify(this.itemsCart))
       }
       else{
        localStorage.setItem('localCart' , JSON.stringify(this.itemsCart))
       }
     }
   } 
  */



