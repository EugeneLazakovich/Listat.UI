import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SelectMultipleControlValueAccessor } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SaleFilter } from '../models/sale-filter.model';
import { Sale } from '../models/sale.model';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  baseApiUrl: string = environment.baseApiUrl;
  version: string = environment.version;
  
  constructor(private http: HttpClient) { }

  getAllSales(): Observable<Sale[]>{
    return this.http.get<Sale[]>(this.baseApiUrl + '/api/v' + this.version + "/auctions/all");
  }

  getSales(saleFilter: SaleFilter): Observable<Sale[]>{
    return this.http.get<Sale[]>(this.baseApiUrl + '/api/v' + this.version + "/auctions", {
      params: {
        name: saleFilter.name,
        status: saleFilter.status,
        seller: saleFilter.seller,
        sort_key: saleFilter.sort_key,
        sort_order: saleFilter.sort_order
      }
    });
  }

  addSale(saleDetails: Sale): Observable<number>{
    console.log(saleDetails);
    saleDetails.createdDt = new Date().toDateString();
    saleDetails.status = "Active";
    return this.http.post<number>(this.baseApiUrl + '/api/v' + this.version + '/auctions/add', saleDetails);
  }
}
