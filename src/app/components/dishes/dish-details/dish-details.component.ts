import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { BASE_URL, PIC_URL } from '../../../constants';

@Component({
  selector: 'app-dish-details',
  templateUrl: './dish-details.component.html',
  styleUrls: ['./dish-details.component.scss']
})
export class DishDetailsComponent implements OnInit {
  pic_base = PIC_URL;

  dish = {};
  lstOf_category = [];

  editable = false;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.getDishDetail(this.route.snapshot.params['id']);
    this.loadCategory();
  }

  getDishDetail(id) {
    this.http.get(`${BASE_URL}dish/${id}`).subscribe(data => {
      this.dish = data;
    });
  }

  loadCategory() {
    this.http.get(`${BASE_URL}category`).subscribe((data: any) => {
      this.lstOf_category = data;
    });
  }

  deleteDish(id, dish) {
    dish.mark_del = true;  // 设置为删除状态，并非移除资料
    this.http.put(`${BASE_URL}dish/${id}`, dish)
      .subscribe(res => {
        this.router.navigate(['/categories']);
      }, (err) => {
        console.log(err);
      });
  }

  editDish() {
    this.editable = !this.editable;
  }
}