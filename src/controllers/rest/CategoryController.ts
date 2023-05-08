import { Controller } from "@tsed/di";
import { BadRequest } from "@tsed/exceptions";
import { PathParams , BodyParams} from "@tsed/platform-params";
import { Get, Post, Delete, Put } from "@tsed/schema";
import { Request } from "express";
import { Category } from "src/interfaces/category.interface";


let categories: Category[] = [
  { id: 1, name: 'balls' },
  { id: 2, name: 'shoes'},
  { id: 3, name: 'shirts'}
]

function GetResult(success:boolean, message: string) : any{
  return { 
    success: success,
    message: message
  }
}

@Controller("/category")
export class CategoryController {
  @Get("/:id")
  async get(@PathParams("id") id:string) : Promise<Category> {
    let category = categories.find(c => c.id == Number.parseInt(id)) as Category;
    return category;
  }

  @Get("/")
  async getAll() : Promise<Category[]> {
    return categories;
  }

  @Post("/")
  async post(@BodyParams() body: any) : Promise<any> {
    let category : Category = {
      id: body.id,
      name: body.name
    }
    categories.push(category)
    return GetResult(true, 'saved succesfully');
  }

  @Put("/:id")
  async update(@PathParams("id") id:string, @BodyParams() body: any) : Promise<any>{
    let category = categories.find(c => c.id == Number.parseInt(id)) as Category;
    if(category){
      category.name = body.name;
      return GetResult(true, 'updated succesfully');
    }
    return BadRequest;
  }

  @Delete("/:id")
  async delete(@PathParams("id") id:string) : Promise<any>{
    return GetResult(true, 'updated succesfully');
  }
}
