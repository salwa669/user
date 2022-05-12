import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';

import { ProductAPIService } from 'src/app/Services/product-api.service';
import { IProduct } from 'src/app/Models/IProduct';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import {MatDialog, MatDialogModule,MatDialogConfig } from '@angular/material/dialog';
import { CartService } from 'src/app/Services/cart.service';
import { ICart } from 'src/app/Models/icart';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  AllProductList: IProduct[]=[] ;
  PrdListOfCat:IProduct[]=[];
  cart:ICart={} as ICart;
  @Input() SelCatID:number=0;
  @Output() addtocart:EventEmitter<object>
 
  currProduct:IProduct|undefined=undefined;
  constructor
  (
    private prdAPIService:ProductAPIService ,
    private cartAPIService:CartService,
    private dialog: MatDialog,
   

  ) 
  {
    this.addtocart=new EventEmitter<object>();
  }
  
  ngOnInit(): void {
  
  this.prdAPIService.GetAllProducts().subscribe(prdList=>{this.AllProductList=prdList;
 
   }); 

  }
  
  ngOnChanges(changes: SimpleChanges): void
  {
    console.log(this.SelCatID);
    this.prdAPIService.GetProductsByCatID(this.SelCatID).subscribe(prdList=>{this.AllProductList=prdList;
      console.log(prdList);
     // console.log(this.SelCatID);
    });
  }
OpenProductDetails(id:number)
{
  const dialogConfig = new MatDialogConfig();
   dialogConfig.data=id;
   console.log(dialogConfig.data);
  this.dialog.open(ProductDetailsComponent,dialogConfig); 


  }
AddToCart(productitem:IProduct)
{
// this.cart.product_id=productitem.id;
// this.cart.quentity=productitem.quantity;
// this.cart.status=false;
// this.cart.user_id="2";
  console.log(productitem);
 this.cartAPIService.addCart(productitem).subscribe(cartitem=>{this.cart=cartitem});

  // this.addtocart.emit(this.)
 }
}
  

