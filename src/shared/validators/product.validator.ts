import { IsDefined, IsNotEmpty, IsString } from "class-validator";

export class ProductValidator {
  @IsString()
  @IsNotEmpty()
  @IsDefined()
  public name!: string;
}
