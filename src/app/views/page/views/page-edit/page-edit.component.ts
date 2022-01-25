import { Component, OnInit } from '@angular/core';
import {PageService} from "../../services/page.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators,} from "@angular/forms";
import {PageModel,} from "../../models/page.model";
import {Subscription} from "rxjs";
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.scss']
})
export class PageEditComponent implements OnInit {
  pages: PageModel = new PageModel();
  pageForm: FormGroup;
  id: string;
  loading: any;
  subscription: Subscription[]=[];
  url: string;

  constructor(private pageService: PageService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private fb: FormBuilder,) {

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{
      this.id=params['id'];
    }
    );
    this.creat();
  }

  creat(){
    this.pageForm= this.fb.group({
      label: ['', Validators.required],

    })
  }
  prepare(){
    const controls= this.pageForm
    let page : PageModel= new PageModel();
    page.label= controls['label'].value
  }


  getTitle() {
    if(this.id=='0'){
      return "creation" +this.id;
    } else {
      return  "Modification de " +this.id;
    }

  }

  save() {

  }

  return() {
    this.router.navigateByUrl( '/page/list/').then();

  }

  //list(){
    //this.location.back();
  //}

  delete() {

  }
}

