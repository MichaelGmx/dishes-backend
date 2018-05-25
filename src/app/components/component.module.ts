import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatModule } from '../mat.module';

import { CategoryComponent } from './categories/category/category.component';
import { CategoryCreateComponent } from './categories/category-create/category-create.component';
import { CategoryDetailsComponent } from './categories/category-details/category-details.component';
import { CategoryEditComponent } from './categories/category-edit/category-edit.component';

import { DishComponent } from './dishes/dish/dish.component';
import { DishDetailsComponent } from './dishes/dish-details/dish-details.component';
import { DishCreateComponent } from './dishes/dish-create/dish-create.component';
import { DishEditComponent } from './dishes/dish-edit/dish-edit.component';

import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
  declarations: [
    CategoryComponent,
    CategoryCreateComponent,
    CategoryDetailsComponent,
    CategoryEditComponent,

    DishComponent,
    DishDetailsComponent,
    DishCreateComponent,
    DishEditComponent,

    UserProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MatModule
  ]
})
export class ComponentModule {}