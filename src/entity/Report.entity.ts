import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './User.entity';

@Entity()
export class Report {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'boolean', default: false })
  approved: boolean;

  @Column({ type: 'integer', nullable: false })
  price: number;

  @Column({ type: 'varchar', length: 40, nullable: false })
  make: string;

  @Column({ type: 'varchar', length: 40, nullable: false })
  model: string;

  @Column({ type: 'integer', nullable: false })
  year: number;

  @Column({ type: 'real', nullable: false })
  lat: number;

  @Column({ type: 'real', nullable: false })
  lng: number;

  @Column()
  mileage: number;

  @ManyToOne(() => User, user => user.reports, { onDelete: 'CASCADE' })
  user: User;
}
