export class Dish {
  public dish_name: string;
  public dish_description: string;
  // category_ID: String;
  // category_name: String;
  public category: object;

  public tags: any[];
  public subs: any[];
  public has_multi_size: boolean;
  public dish_sizes: any[];

  public dish_price: number;
  public dish_pic_path: string;
  public dish_sort: number;
  public dish_limit: number;
  public dish_promotions: any[];   // 适用优惠
  public dish_coupons: any[];      // 适用优惠券

  public comments: any[];

  public dish_sales_volume: number;
  public dish_remark: string;
  public create_date: Date;
  public update_date: Date;
  public create_by: string;
  public update_by: string;
  public mark_del: boolean;

  constructor() { }
}