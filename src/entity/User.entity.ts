import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Role } from '../auth/utils/role';
import { Report } from './Report.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'enum', enum: Role, default: Role.USER })
  role: string;

  @Column({ unique: true, type: 'varchar', length: 40, nullable: false })
  email: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  password: string;

  @OneToMany(() => Report, report => report.user)
  reports: Report[];
}
