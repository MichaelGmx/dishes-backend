import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cateogry',
  templateUrl: './cateogry.component.html',
  styleUrls: ['./cateogry.component.scss']
})
export class CateogryComponent implements OnInit {
  lstOf_Category = [
    { name: '热销', description: '热销分类', pic_path: '', sort: 1 },
    { name: '优惠', description: '优惠分类', pic_path: '', sort: 2 },
    { name: '找奶茶', description: '找奶茶分类', pic_path: '', sort: 3 },
    { name: '找醇茶', description: '找醇茶分类', pic_path: '', sort: 4 },
    { name: '找奶盖', description: '找奶盖分类', pic_path: '', sort: 5 }
  ]

  constructor() { }

  ngOnInit() {
  }

}
