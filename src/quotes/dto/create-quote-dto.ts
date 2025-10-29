import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateQuoteDto {
  @IsNotEmpty()
  @IsString()
  quote: string;

  @IsOptional()
  @IsString()
  author?: string;
}
