import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";
import {QueryResultTemplates} from "../models/template.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TemplateService {
 private url: string;


  constructor(private http: HttpClient) { }
  /**
   * GetAll
   */
  getAll(params: any = {}): Observable<QueryResultTemplates> {
    return this.http.get<QueryResultTemplates>(environment.baseUrl + this.url, {params});

  }
}
