import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateListComponent } from './views/template-list/template-list.component';
import { TemplateViewsComponent } from './views/template-views/template-views.component';
import { TemplateEditComponent } from './views/template-edit/template-edit.component';
import {RouterModule, Routes,} from "@angular/router";
import {ButtonModule, CardModule, FormModule, GridModule} from "@coreui/angular";
import {IconModule} from "@coreui/icons-angular";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatRadioModule} from "@angular/material/radio";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatIconModule} from "@angular/material/icon";
import {ReactiveFormsModule} from "@angular/forms";
import {AngularEditorModule} from "@kolkov/angular-editor";
import {HttpClientModule} from "@angular/common/http";


const routes: Routes = [
  {
    path: '',
    component: TemplateListComponent,

  },
  {
    path: 'edit/:id',
    component: TemplateEditComponent,

  },
  {
    path: 'views/:id',
    component: TemplateViewsComponent,

  },
  ]



@NgModule({
  declarations: [
    TemplateListComponent,
    TemplateViewsComponent,
    TemplateEditComponent
  ],
    imports: [HttpClientModule,
        CommonModule,
        RouterModule.forChild(routes),
        GridModule,
        CardModule,
        FormModule,
        ReactiveFormsModule,
        IconModule,
        ButtonModule,
        MatPaginatorModule,
        MatTableModule,
        MatCheckboxModule,
        MatRadioModule,
        MatFormFieldModule,
        MatSelectModule,
        MatIconModule,
        AngularEditorModule
    ]
})
export class TemplateModule { }
