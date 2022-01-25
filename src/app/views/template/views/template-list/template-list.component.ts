import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {PageModel} from "../../../page/models/page.model";
import {TemplateService} from "../../services/template.service";
import {QueryResultTemplates, TemplateModel} from "../../models/template.model";
import { MatPaginator } from '@angular/material/paginator';
import {ItemModel, QueryResultItems} from "../../../item/models/item.model";
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-template-list',
  templateUrl: './template-list.component.html',
  styleUrls: ['./template-list.component.scss']
})
export class TemplateListComponent implements OnInit {
  displayedColumns: string[]=['_id' , 'label'];
  dataSource: MatTableDataSource<TemplateModel> = new MatTableDataSource<TemplateModel>();
  templates: TemplateModel[]=[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  //contentFilter: string= '';
  subscription: Subscription[]=[];
  templatesBase: TemplateModel[]=[]
  loading: boolean= false;
  url: string;
  isLoading: boolean= false;
  id : string;


  constructor(private templateService: TemplateService,
              private router: Router,
              private cdr: ChangeDetectorRef,
              private activatedRoute: ActivatedRoute,) { }

  ngOnInit(): void {
    this.init();
  }
  loadlist(templates: TemplateModel[]){
    this.dataSource= new MatTableDataSource(templates);
    this.dataSource.paginator=this.paginator;
    this.paginator._changePageSize(10);
  }

  init() {
    //this.contentFilter = '';
    this.subscription.push(
      this.templateService.getAll().subscribe(
        (res: QueryResultTemplates) => {
          if (res) {
            this.loadlist(res.data);
            this.templates = res.data;
            this.loading = false;
            this.isLoading = false;
            this.cdr.detectChanges();

          }
        }
      )
    );
  }
  create(id: string) {
    this.router.navigateByUrl('/template/edit/' +id).then();
  }
  view(id){
    this.router.navigateByUrl('/template/views/' +id).then();
  }


}
