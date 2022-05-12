import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, filter, Observable, retry } from 'rxjs';
import { ICart } from '../Models/icart';
import { environment } from 'src/environments/environment';
import { IProduct } from '../Models/IProduct';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  private httpOptions;
  constructor( private httpClient :HttpClient) { 
    this.httpOptions={ headers: new HttpHeaders({
      'Content-Type': 'application/json'
      
    })
  }
  }
  getAllCarts():Observable<ICart[]>
  {
    return this.httpClient.get<ICart[]>(`${environment.BaseURL}/Cart`)
  }
  
  getCartById(cartId :number):Observable<ICart>
  {
    return this.httpClient.get<ICart>(`${environment.BaseURL}/Cart/${cartId }`)
  }


  addCart(cartproduct :IProduct): Observable<ICart>
  {
    return this.httpClient.post<ICart>(`${environment.BaseURL}/Cart/Add`, JSON.stringify(cartproduct),this.httpOptions);
  }

  updateCart(cartId :number,updatedCart:ICart)
  {
    return this.httpClient.patch<ICart>(`${environment.BaseURL}/Cart/${cartId}`,updatedCart)

  }
  deleteCart(cartId :number)
  {
    return this.httpClient.delete<ICart>(`${environment.BaseURL}/Cart/${cartId}`);
    
  }

}
