import {Controller} from "@tsed/di";
import {Get, Post, Delete, Put} from "@tsed/schema";

@Controller("/category")
export class CategoryController {
  @Get("/:id")
  get() {
    return {name:'book1',price:10};
  }

  @Get("/")
  getAll() {
    return [{name:'book1',price:10},{name:'book2',price:13}];
  }

  @Post("/")
  post() {
    return 'create sucessfully';
  }

  @Put("/:id")
  update() {
    return 'update sucessfully';
  }

  @Delete("/:id")
  delete() {
    return 'delete sucessfully';
  }
}
