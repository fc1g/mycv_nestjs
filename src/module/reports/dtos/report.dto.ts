import { Expose, Transform } from 'class-transformer';
import { User } from '../../../entity/User.entity';

export class ReportDto {
  @Expose()
  id: number;

  @Expose()
  approved: boolean;

  @Expose()
  price: number;

  @Expose()
  year: number;

  @Expose()
  lat: number;

  @Expose()
  lng: number;

  @Expose()
  make: string;

  @Expose()
  model: string;

  @Expose()
  mileage: number;

  @Transform(({ obj }: { obj: { user: User } }) => obj.user.id)
  @Expose()
  userId: number;
}
