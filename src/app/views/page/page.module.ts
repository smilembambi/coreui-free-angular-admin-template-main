import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageListComponent } from './views/page-list/page-list.component';
import { PageEditComponent } from './views/page-edit/page-edit.component';
import { PageViewsComponent } from './views/page-views/page-views.component';
import {RouterModule, Routes} from "@angular/router";
import {ButtonModule, CardModule, FormModule, GridModule} from "@coreui/angular";
import {IconModule} from "@coreui/icons-angular";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatSelectModule} from "@angular/material/select";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatRadioModule} from "@angular/material/radio";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {ReactiveFormsModule} from "@angular/forms";
import {AngularEditorModule} from "@kolkov/angular-editor";
import { HttpClientModule } from '@angular/common/http';
import {MatFormFieldModule} from "@angular/material/form-field";

const routes: Routes = [
  {
    path:'',
    redirectTo: 'list',
    pathMatch:'full'
  },
  {path: 'list',
    component: PageListComponent},

  {path: 'edit/:id',
    component: PageEditComponent,},

  {path: 'views/:id',
    component: PageViewsComponent,},

]




@NgModule({
  declarations: [
    PageListComponent,
    PageEditComponent,
    PageViewsComponent,
  ],
    imports: [ HttpClientModule,
        CommonModule,
        RouterModule.forChild(routes),
        CardModule,
        GridModule,
        FormModule,
        ReactiveFormsModule,
        ButtonModule,
        IconModule,
        MatTableModule,
        MatPaginatorModule,
        MatTooltipModule,
        MatSelectModule,
        MatCheckboxModule,
        MatRadioModule,
        MatIconModule,
        MatInputModule,
        MatButtonModule,
        AngularEditorModule,
        MatFormFieldModule,
    ]
})
export class PageModule { }
