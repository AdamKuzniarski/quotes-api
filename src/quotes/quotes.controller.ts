import { Controller, Get, Post, Req } from '@nestjs/common';
import { QuotesService } from './quotes.service';
import type { RawBodyRequest } from '@nestjs/common';

@Controller('quotes')
export class QuotesController {
  constructor(private readonly quotesService: QuotesService) {}

  @Get()
  getAll() {
    return this.quotesService.findAll();
  }

  @Post()
  addQuote(@Req() req: RawBodyRequest<Request>) {
    return this.quotesService.createQuote(req.body);
  }
}
