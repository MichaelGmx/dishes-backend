import { Category } from "./Category.model";
import { PIC_URL } from '../constants';

export class CategoryINH extends Category {
  constructor() {
    super();
  }

  get category_pic_path_full() {
    return `${PIC_URL}${this.category_pic_path}`;
  }
}