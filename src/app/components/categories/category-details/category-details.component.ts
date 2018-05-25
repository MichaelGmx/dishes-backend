import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { BASE_URL } from '../../../constants';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CategoryDetailsComponent implements OnInit {

  category = {};

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.getCategoryDetail(this.route.snapshot.params['id']);
  }

  getCategoryDetail(id) {
    this.http.get(`${BASE_URL}category/${id}`).subscribe(data => {
      this.category = data;
    });
  }

  deleteCategory(id, category) {
    category.mark_del = true;  // 设置为删除状态，并非移除资料
    this.http.put(`${BASE_URL}category/${id}`, category)
      .subscribe(res => {
        this.router.navigate(['/categories']);
      }, (err) => {
        console.log(err);
      });
  }
}
