import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {PageModel, QueryResultPages} from "../../models/page.model";
import {MatTableDataSource} from "@angular/material/table";
import {PageService} from "../../services/page.service";
import {MatPaginator} from "@angular/material/paginator";
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.scss']
})
export class PageListComponent implements OnInit {
  displayedColumns: string[]=['_id', 'label',];
  dataSource: MatTableDataSource<PageModel>= new MatTableDataSource<PageModel>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
 // contentFilter: string= '';
  subscription: Subscription[]=[];
  pages: PageModel[]=[];
  pagesBase: PageModel[]=[]
  loading: boolean= false;
  url: string;
  isLoading: boolean= false;
  id : string;


  constructor(private pageService: PageService,
              private router: Router,
              private cdr: ChangeDetectorRef,
              private activatedRoute: ActivatedRoute,) { }

  ngOnInit(): void {
    this.init();
  }
  loadlist(pages: PageModel[]){
    this.dataSource= new MatTableDataSource(pages);
    this.dataSource.paginator=this.paginator;
    this.paginator._changePageSize(10);
  }


  init() {
   // this.contentFilter = '';
    this.subscription.push(
      this.pageService.getAll().subscribe(
        (res: QueryResultPages) => {
          if (res) {
            this.loadlist(res.data);
            this.pages = res.data;
            this.loading = false;
            this.isLoading = false;
            this.cdr.detectChanges();

          }
        }
      )
    );
  }
    create(id: string) {
      this.router.navigateByUrl('/page/edit/' +id).then();
    }
  view(id){
    this.router.navigateByUrl('/page/views/' +id).then();
  }

 // /**
   //* filter pages
 //  */
 // filterAll() {
   // if (this.contentFilter !=''){
     //  this.pages = this.pages.filter(el => el.content == this.contentFilter);
       //this.loadList(this.pages)
      //  }

     // }
   // }
  }

