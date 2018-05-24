import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { CateogryComponent } from './components/categories/cateogry/cateogry.component';
import { CateogryCreateComponent } from './components/categories/cateogry-create/cateogry-create.component';
import { CateogryDetailsComponent } from './components/categories/cateogry-details/cateogry-details.component';
import { CateogryEditComponent } from './components/categories/cateogry-edit/cateogry-edit.component';

import { UserProfileComponent } from './components/user-profile/user-profile.component';

const routes: Routes =[
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'category',         component: CateogryComponent,        data: { title: "Category List" } },
  { path: 'category-create',  component: CateogryCreateComponent,  data: { title: "Add New Category" } },
  { path: 'category-details', component: CateogryDetailsComponent, data: { title: "View Category" } },
  { path: 'category-edit',    component: CateogryEditComponent,    data: { title: "Edit Category" } },

  { path: 'user-profile',     component: UserProfileComponent,     data: { title: "User Profile" } }
    // { path: 'user-profile',   component: UserProfileComponent },
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