import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ICart } from 'src/app/Models/icart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  CartList:ICart[]=[];
 
  constructor() { }

  ngOnInit(): void {
  }
  
}
