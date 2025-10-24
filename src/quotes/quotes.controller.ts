import { Controller, Get } from '@nestjs/common';
import { QuotesService } from './quotes.service';
import type { Quote } from './types/quotes.model';

@Controller('quotes')
export class QuotesController {
  constructor(private readonly quotesService: QuotesService) {}

  @Get()
  getAll(): Quote[] {
    return this.quotesService.findAll();
  }

  @Get('random')
  getRandom(): Quote {
    return this.quotesService.getRandom();
  }
}
