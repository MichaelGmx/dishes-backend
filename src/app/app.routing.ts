import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { CategoryComponent } from './components/categories/category/category.component';
import { CategoryCreateComponent } from './components/categories/category-create/category-create.component';
import { CategoryDetailsComponent } from './components/categories/category-details/category-details.component';
import { CategoryEditComponent } from './components/categories/category-edit/category-edit.component';

import { DishComponent } from './components/dishes/dish/dish.component';
import { DishDetailsComponent } from './components/dishes/dish-details/dish-details.component';
import { DishCreateComponent } from './components/dishes/dish-create/dish-create.component';
import { DishEditComponent } from './components/dishes/dish-edit/dish-edit.component';

import { UserProfileComponent } from './components/user-profile/user-profile.component';

const routes: Routes =[
  { path: '', redirectTo: 'category', pathMatch: 'full' },
  { path: 'category',             component: CategoryComponent,        data: { title: "Category List" } },
  { path: 'category-create',      component: CategoryCreateComponent,  data: { title: "Add New Category" } },
  { path: 'category-details/:id', component: CategoryDetailsComponent, data: { title: "View Category" } },
  { path: 'category-edit/:id',    component: CategoryEditComponent,    data: { title: "Edit Category" } },

  { path: 'dish',                 component: DishComponent,            data: { title: "Dish List" } },
  { path: 'dish-create',          component: DishCreateComponent,      data: { title: "Add New Dish" } },
  { path: 'dish-details/:id',     component: DishDetailsComponent,     data: { title: "View Dish" } },
  { path: 'dish-edit/:id',        component: DishEditComponent,        data: { title: "Edit Dish" } },

  { path: 'user-profile',         component: UserProfileComponent,     data: { title: "User Profile" } }
  // { path: 'table-list',     component: TableListComponent },
  // { path: 'typography',     component: TypographyComponent },
  // { path: 'icons',          component: IconsComponent },
  // { path: 'maps',           component: MapsComponent },
  // { path: 'notifications',  component: NotificationsComponent },
  // { path: 'upgrade',        component: UpgradeComponent },
  // { path: '',               redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [ 
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}