import * as Types from "express";
import {
  Controller,
  Get,
  Response,
  Request,
  Post,
  Body,
  Delete,
} from "@decorators/express";
import { Product } from "../models/product";

// import mysql from "../util/database";

@Controller("/product")
export class ProductsController {
  public count = 0;

  // @Get("/add")
  // public createProduct(): string {
  //   // await mysql.execute('INSERT INTO products (id, title, price, description, imageUrl) VALUES (?, ?, ?, ?, ?)', [++this.count, 'ffff', 44, 'www.hub.com', 'this is test description']).then( (product) => {
  //
  //   //   console.log('prod => works', product);
  //   //
  //   // }).catch(console.error);
  //   // const [prod] = await this.getProducts();
  //
  //   return "prod";
  // }

  @Get("/add")
  public async createProduct(): Promise<any> {
    await Product.create({
      title: "Romeo" + Math.random() + "+++",
      price: Math.random(),
      imgUrl: "www.google.com" + Math.random() + "+++",
      description: "Some Description" + Math.random() + "+++",
    }).catch(console.error);

    return await Product.findAll();
  }

  @Get("")
  public async getProducts(): Promise<any> {
    // return  await mysql.execute('SELECT * FROM products')
    return await Product.findAll();
  }

  @Post("/:id")
  public updateProduct(
    @Body() body: any,
    @Request() req: Types.Request,
    @Response() res: Types.Response
  ): void {
    Product.findByPk(req.params?.id)
      .then((product) => product?.update(body) && res.status(200).send(product))
      .catch(console.error);
  }

  @Get("/:id")
  public async getOneProduct(
    @Response() res: Types.Response,
    @Request() req: Types.Request
  ): Promise<any> {
    const id = req.params?.id;
    return await Product.findByPk(id);
  }

  @Delete("/:id")
  public async deleteProduct(@Request() req: Types.Request): Promise<any> {
    const id = req.params?.id;
    return Product.findByPk(id).then((p) => p?.destroy());
  }

  // @Get("/:id")
  // public getProduct(@Response() res: Types.Response): void {
  //   res.send([
  //     { name: "Roman", id: 1 },
  //     { name: "Antonio", id: 2 },
  //     { name: "Bogdan", id: 3 },
  //     { name: "Stepan", id: 4 },
  //   ]);
  // }

  // @Get("")
  // public async getProducts() {
  //   // return  await mysql.execute('SELECT * FROM products')
  // }
}
