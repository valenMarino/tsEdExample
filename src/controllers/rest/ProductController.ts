import {Controller} from "@tsed/di";
import {Get, Post, Put, Delete} from "@tsed/schema";

@Controller("/product")
export class ProductController {
  @Get("/")
  get() {
    return { name:'Pelota Basquet n7',price:23500.99,quantity:2 };
  }

  @Post("/")
  post() {
    return 'save succesfully';
  }

  @Put("/:id")
  put() {
    return 'edit succesfully';
  }

  @Delete("/:id")
  delete() {
    return 'delete succesfully';
  }
}
