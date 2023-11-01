import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
import { AdminMainComponent } from './admin-main/admin-main.component';
import { AdminFormComponent } from './admin-form/admin-form.component';
import { AdminNewFunkoComponent } from './admin-new-funko/admin-new-funko.component';
import { AdminEditFunkoComponent } from './admin-edit-funko/admin-edit-funko.component';
import { AdminMainPageComponent } from '../pages/admin/admin-main-page/admin-main-page.component';
import { AdminNewFunkoPageComponent } from '../pages/admin/admin-new-funko-page/admin-new-funko-page.component';
import { AdminEditFunkoPageComponent } from '../pages/admin/admin-edit-funko-page/admin-edit-funko-page.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdminHeaderComponent,
    AdminFooterComponent,
    AdminMainComponent,
    AdminFormComponent,
    AdminNewFunkoComponent,
    AdminEditFunkoComponent,
    AdminMainPageComponent,
    AdminNewFunkoPageComponent,
    AdminEditFunkoPageComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
