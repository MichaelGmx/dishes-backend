import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatTooltipModule,
  MatFormFieldModule,
  MatSelectModule,
  MatOptionModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatRippleModule,
    MatTooltipModule,
    MatFormFieldModule
  ], 
  exports: [
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatRippleModule,
    MatTooltipModule,
    MatFormFieldModule
  ]
})
export class MatModule {}