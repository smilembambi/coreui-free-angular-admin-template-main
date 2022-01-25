import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";
import {QueryResultPages} from "../models/page.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PageService {
  private url: string;

  constructor(private http: HttpClient) { }

  /**
   * GetAll
   */
  getAll(params: any = {}): Observable<QueryResultPages> {
    return this.http.get<QueryResultPages>(environment.baseUrl + this.url, {params});

  }
}
