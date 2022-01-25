import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemListComponent } from './views/item-list/item-list.component';
import { ItemEditComponent } from './views/item-edit/item-edit.component';
import { ItemViewsComponent } from './views/item-views/item-views.component';
import {RouterModule, Routes} from "@angular/router";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatRadioModule} from "@angular/material/radio";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AngularEditorModule} from "@kolkov/angular-editor";
import {MatButtonModule} from "@angular/material/button";


const routes: Routes = [
  {
    path: '',
    component: ItemListComponent,

  },
  {
    path: 'edit/:id',
    component: ItemEditComponent,

  },
  {
    path: 'views/:id',
    component: ItemViewsComponent,

  },
]




@NgModule({
  declarations: [
    ItemListComponent,
    ItemEditComponent,
    ItemViewsComponent
  ],
    imports: [HttpClientModule,
      AngularEditorModule,
      FormsModule,
      CommonModule,
        RouterModule.forChild(routes),
        MatCheckboxModule,
        MatRadioModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatSelectModule,
        MatIconModule,
        MatInputModule,
        MatTableModule,
        MatPaginatorModule,
        AngularEditorModule,
        MatButtonModule,
    ]
})
export class ItemModule { }
