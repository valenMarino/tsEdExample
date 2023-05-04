import {Controller} from "@tsed/di";
import {Get} from "@tsed/schema";

@Controller("/hello-world")
export class HelloWorldController {
  @Get("/")
  get() {
    return {name:'book1',price:10};
  }

  @Get("/all")
  getAll() {
    return [{name:'book1',price:10},{name:'book2',price:13}];
  }
}
