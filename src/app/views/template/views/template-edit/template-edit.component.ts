import { Component, OnInit } from '@angular/core';
import {TemplateService} from "../../services/template.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators,} from "@angular/forms";
import {TemplateModel} from "../../models/template.model";
import {Subscription} from "rxjs";
import {PageModel} from "../../../page/models/page.model";

@Component({
  selector: 'app-template-edit',
  templateUrl: './template-edit.component.html',
  styleUrls: ['./template-edit.component.scss']
})
export class TemplateEditComponent implements OnInit {
  templates: TemplateModel= new  TemplateModel();
  templateForm: FormGroup;
  id: string;
  loading: any;
  subscription: Subscription[]=[];
  url: string;

  constructor(private templateService: TemplateService,
              private fb: FormBuilder,
              private activatedRoute: ActivatedRoute,
              private router: Router,) {

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{
        this.id=params['id'];
      }
    );
    this.creat()
  }
  creat(){
    this.templateForm= this.fb.group({
      //id : ['', Validators.required],
      label: ['', Validators.required],

    })
  }
  prepare(){
    const controls= this.templateForm
    let template : TemplateModel= new TemplateModel();
    //template._id= controls['id'].value
    template.label= controls['label'].value
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
    this.router.navigateByUrl( '/template/list/').then();

  }

  // list(){
  // this.router.navigateByUrl('/page/list/').then();
  // }

  delete() {

  }


}
