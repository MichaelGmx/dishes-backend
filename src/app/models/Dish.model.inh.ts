import { Dish } from "./Dish.model";
import { PIC_URL } from '../constants';

export class DishINH extends Dish {
  constructor() {
    super();
  }

  get dish_pic_path_full() {
    return `${PIC_URL}${this.dish_pic_path}`;
  }
}