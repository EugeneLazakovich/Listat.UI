import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  baseApiUrl: string = environment.baseApiUrl;
  version: string = environment.version;

  constructor(private http: HttpClient) { }

  getAllItems(): Observable<Item[]>{
    return this.http.get<Item[]>(this.baseApiUrl + '/api/v' + this.version + '/items');
  }

  addItem(addItemRequest: Item): Observable<number>{
    return this.http.post<number>(this.baseApiUrl + '/api/v' + this.version + '/items/add', addItemRequest);
  }

  getItem(id: number): Observable<Item>{
    return this.http.get<Item>(this.baseApiUrl + '/api/v' + this.version + '/items/' + id);
  }

  updateItem(id: number, item: Item){
    return this.http.put(this.baseApiUrl + '/api/v' + this.version + '/items/' + id, item);
  }

  deleteItem(id: number){
    return this.http.get(this.baseApiUrl + '/api/v' + this.version + '/items/delete/' + id);
  }
}
