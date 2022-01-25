import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {PageModel, QueryResultPages} from "../../../page/models/page.model";
import {MatPaginator} from "@angular/material/paginator";
import {Subscription} from "rxjs";
import {ItemService} from "../../services/item.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ItemModel, QueryResultItems} from '../../models/item.model';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  displayedColumns: string[]=['_id', 'label', 'content'];
  dataSource: MatTableDataSource<ItemModel>= new MatTableDataSource<ItemModel>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  contentFilter: string= '';
  subscription: Subscription[]=[];
  items: ItemModel[]=[];
  itemsBase: ItemModel[]=[]
  loading: boolean= false;
  url: string;
  isLoading: boolean= false;
  id : string;

  constructor(private itemService: ItemService,
              private router: Router,
              private cdr: ChangeDetectorRef,
              private activatedRoute: ActivatedRoute,) { }

  ngOnInit(): void {
    this.init();
  }
  loadlist(items: ItemModel[]){
    this.dataSource= new MatTableDataSource(items);
    this.dataSource.paginator=this.paginator;
    this.paginator._changePageSize(10);
  }

  init() {
    this.contentFilter = '';
    this.subscription.push(
      this.itemService.getAll().subscribe(
        (res: QueryResultItems) => {
          if (res) {
            //this.loadList(res.data)
            this.loadlist(res.data);
            this.items = res.data;
            this.loading = false;
            this.isLoading = false;
            this.cdr.detectChanges();

          }
        }
      )
    );
  }
  create(id: string) {
    this.router.navigateByUrl('/item/edit/' +id).then();
  }
  view(id){
    this.router.navigateByUrl('/item/views/' +id).then();
  }


}
