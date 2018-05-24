import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

import { AppComponent } from './app.component';

import { LayoutModule } from './layout/layout.module';
import { ComponentModule } from './components/component.module';

import { NavbarComponent } from './layout/navbar/navbar.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { FooterComponent } from './layout/footer/footer.component';

import { AppRoutingModule } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    // NavbarComponent,
    // SidebarComponent,
    // FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    LayoutModule,
    ComponentModule,

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
