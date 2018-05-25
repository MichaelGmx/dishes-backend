import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL, PIC_URL } from '../../../constants';
import { SharedService } from '../../../services/shared.service';
import { DishINH } from '../../../models/Dish.model.inh';

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.scss']
})
export class DishComponent implements OnInit {
  lstOf_dish: DishINH[];

  constructor(
    private http: HttpClient,
    private sharedService: SharedService
  ) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.http.get(`${BASE_URL}dish`).subscribe((data: any) => {
      this.lstOf_dish = [];
      data.forEach(dish => {
        this.lstOf_dish.push(Object.assign(new DishINH, dish));
      });
    });
  }

}