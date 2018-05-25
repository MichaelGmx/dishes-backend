import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { BASE_URL } from '../../../constants';
import { SharedService } from '../../../services/shared.service';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.scss']
})
export class CategoryEditComponent implements OnInit {
  category = {};

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private sharedService: SharedService
  ) { }

  ngOnInit() {
    this.getCategory(this.route.snapshot.params['id']);
  }

  getCategory(id) {
    this.http.get(`${BASE_URL}category/${id}`).subscribe(data => {
      this.category = data;
    });
  }

  updateCategory(id, category) {
    this.http.put(`${BASE_URL}category/${id}`, category)
      .subscribe(res => {
        let id = res['_id'];
        this.router.navigate(['/category-details', id]);
        
        this.sharedService.notify('Update Category Success', 'success');
      }, (err) => {
        console.log(err);
      });
  }
}
