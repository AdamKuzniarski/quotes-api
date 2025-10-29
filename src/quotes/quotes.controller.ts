import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { QuotesService } from './quotes.service';

import type { Quote as QuoteType, quoteId } from './types/quotes.model';
import { CreateQuoteDto } from './dto/create-quote-dto';
import { UpdateQuoteDto } from './dto/update-quote-dto';

@Controller('quotes')
export class QuotesController {
  constructor(private readonly quotesService: QuotesService) {}

  @Get()
  getAll() {
    return this.quotesService.findAll();
  }

  @Get(':id')
  getOne(@Param('id') id: quoteId) {
    return this.quotesService.findOne(id);
  }

  @Post()
  addQuote(@Body() createQuoteDto: CreateQuoteDto) {
    return this.quotesService.createQuote(createQuoteDto);
  }

  @Put(':id')
  update(
    @Param('id') id: quoteId,
    @Body() updateQuoteDto: UpdateQuoteDto,
  ): Promise<QuoteType | null> {
    return this.quotesService.update(id, updateQuoteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.quotesService.remove(+id);
  }
}
