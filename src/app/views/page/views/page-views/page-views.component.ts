import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PageModel, QueryResultPages} from "../../models/page.model";
import {PageService} from "../../services/page.service";

@Component({
  selector: 'app-page-views',
  templateUrl: './page-views.component.html',
  styleUrls: ['./page-views.component.scss']
})
export class PageViewsComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

}
