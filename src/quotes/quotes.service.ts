import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Quote } from './entity/quotes.entity';
import { Repository } from 'typeorm';

@Injectable()
export class QuotesService {
  constructor(
    // Inject TypeORM's Repository for the User entity
    @InjectRepository(Quote)
    private quoteRepository: Repository<Quote>,
  ) {}

  async findAll(): Promise<Quote[]> {
    return this.quoteRepository.find();
  }

  async createQuote(quote: any): Promise<any> {
    const newQuote = this.quoteRepository.create(quote);
    return this.quoteRepository.save(newQuote);
  }
}
