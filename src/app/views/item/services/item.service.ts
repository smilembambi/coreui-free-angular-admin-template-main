import { Injectable } from '@angular/core';
import {QueryResultItems} from "../models/item.model";
import {environment} from "../../../../environments/environment";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private url: string;

  constructor(private http: HttpClient) { }

  /**
   * GetAll
   */
  getAll(params: any = {}): Observable<QueryResultItems> {
    return this.http.get<QueryResultItems>(environment.baseUrl + this.url, {params});

  }

}
