import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatModule } from '../mat.module';

import { CateogryComponent } from './categories/cateogry/cateogry.component';
import { CateogryCreateComponent } from './categories/cateogry-create/cateogry-create.component';
import { CateogryDetailsComponent } from './categories/cateogry-details/cateogry-details.component';
import { CateogryEditComponent } from './categories/cateogry-edit/cateogry-edit.component';

import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
  declarations: [
    CateogryComponent,
    CateogryCreateComponent,
    CateogryDetailsComponent,
    CateogryEditComponent,

    UserProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatModule
  ],
  exports: [
    CateogryComponent,
    CateogryCreateComponent,
    CateogryDetailsComponent,
    CateogryEditComponent,

    UserProfileComponent
  ]
})
export class ComponentModule {}