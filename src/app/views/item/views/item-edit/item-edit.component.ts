import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ItemService} from "../../services/item.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ItemModel} from "../../models/item.model";
import {Subscription} from "rxjs";
import {PageModel} from "../../../page/models/page.model";
import {AngularEditorConfig} from "@kolkov/angular-editor";

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.scss']
})
export class ItemEditComponent implements OnInit {
    item : ItemModel = new ItemModel();
  itemForm: FormGroup;
  id: string;
  formGroup: any;
  loading: any;
  subscription: Subscription[]=[];
  name = 'Angular 6';
  content = '';



  constructor(private itemService: ItemService,
              private fb: FormBuilder,
              private router: Router,
              private activatedRoute: ActivatedRoute,) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
    });
    this.creat();

  }
  creat(){
    this.itemForm= this.fb.group({
      _id:['', Validators.required],
      label: ['', Validators.required],
      content:['', Validators.required],

    })
  }
  prepare(){
    const controls= this.itemForm
    let item : ItemModel= new ItemModel();
    item._id = controls['_id'].value;
    item.label= controls['label'].value;
    item.content= controls['content'].value;
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
    this.router.navigateByUrl( '/app/item').then();

  }

   list(){
  this.router.navigateByUrl('/item/list/').then();
   }

  delete() {

  }
  //edit

  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [
      ['bold']
    ],
    customClasses: [
      {
        name: "quote",
        class: "quote",
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ]
  };

}
