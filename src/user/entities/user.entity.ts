import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { Role } from '../types/role.enum';

@Entity()
@Unique(['email'])
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;
  @Column({ type: 'text' })
  email: string;

  @Column()
  password: string;

  @Column({ type: 'text' })
  role: Role;
}
