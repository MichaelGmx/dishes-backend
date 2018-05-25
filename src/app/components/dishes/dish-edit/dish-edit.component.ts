import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { BASE_URL } from '../../../constants';
import { SharedService } from '../../../services/shared.service';

@Component({
  selector: 'app-dish-edit',
  templateUrl: './dish-edit.component.html',
  styleUrls: ['./dish-edit.component.scss']
})
export class DishEditComponent implements OnInit {
  dish = {};

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private sharedService: SharedService
  ) { }

  ngOnInit() {
    this.getDish(this.route.snapshot.params['id']);
  }

  getDish(id) {
    this.http.get(`${BASE_URL}dish/${id}`).subscribe(data => {
      this.dish = data;
    });
  }

  updateDish(id, dish) {
    this.http.put(`${BASE_URL}dish/${id}`, dish)
      .subscribe(res => {
        let id = res['_id'];
        this.router.navigate(['/dish-details', id]);
        
        this.sharedService.notify('Update dish Success', 'success');
      }, (err) => {
        console.log(err);
      });
  }
}