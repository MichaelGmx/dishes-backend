import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from '../../../constants';
import { SharedService } from '../../../services/shared.service';
import { CategoryINH } from '../../../models/Category.model.inh';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  lstOf_category: CategoryINH[] = [];

  constructor(
    private http: HttpClient,
    private sharedService: SharedService
  ) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.http.get(`${BASE_URL}category`).subscribe((data: any) => {
      this.lstOf_category = [];
      data.forEach(category => {
        this.lstOf_category.push(Object.assign(new CategoryINH, category));
      });
    });
  }

  notify() {
    this.sharedService.notify(
      "这是一个消息 - 尝试一点中文效果"
    );
  }

}
