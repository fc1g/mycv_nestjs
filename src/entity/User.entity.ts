import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, type: 'varchar', length: 40, nullable: false })
  email: string;

  @Column({ type: 'varchar', length: 50, nullable: false })
  password: string;
}
