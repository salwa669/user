import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, filter, Observable, retry } from 'rxjs';
import { IOrder } from '../Models/iorder';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private httpOptions;
  constructor(private httpClient: HttpClient) {
    this.httpOptions={
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        // , Authorization': 'Token'
      })
    }
  }

  getAllOrder():Observable<IOrder[]>

  {

    return this.httpClient.get<IOrder[]>(`${environment.BaseURL}/Order`)

  }

  

  getOrderById(orderId :number):Observable<IOrder>

  {

    return this.httpClient.get<IOrder>(`${environment.BaseURL}/Order/${orderId }`)

  }
  addNewOrder(neworder: IOrder): Observable<IOrder>
    {
      return this.httpClient.post<IOrder>(`${environment.BaseURL}/Order`, JSON.stringify(neworder),this.httpOptions);
    }
  
    updateOrder (orderId :number ,newProduct :IOrder) :Observable<IOrder>
    {
        return this.httpClient.put<IOrder>(`${environment.BaseURL}/Order?id=${orderId}`,
        JSON.stringify(newProduct));
    } 
    deleteOrder (orderId :number ): Observable<IOrder>
    {
      return this.httpClient.delete<IOrder>(`${environment.BaseURL}/Order?id=${orderId}`)
    }


}
