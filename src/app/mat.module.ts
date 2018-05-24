import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatTooltipModule,
  MatFormFieldModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatInputModule,
    MatRippleModule,
    MatTooltipModule,
    MatFormFieldModule
  ], 
  exports: [
    MatButtonModule,
    MatInputModule,
    MatRippleModule,
    MatTooltipModule,
    MatFormFieldModule
  ]
})
export class MatModule {}