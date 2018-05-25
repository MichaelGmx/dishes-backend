import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BASE_URL } from '../../../constants';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.scss']
})
export class CategoryCreateComponent implements OnInit {
  category = {};

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit() {
  }

  saveCategory() {
    this.http.post(`${BASE_URL}category`, this.category)
      .subscribe(res => {
        let id = res['_id'];
        this.router.navigate(['/category-details', id]);
      }, (err) => {
        console.log(err);
      });
  }

}
