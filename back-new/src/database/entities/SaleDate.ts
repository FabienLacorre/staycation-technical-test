import { Entity, PrimaryGeneratedColumn, Column, Unique } from "typeorm";

@Entity()
export class SaleDate {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  start_date: Date;

  @Column()
  end_date: Date;

  @Column("date", { array: true })
  bookable_days: Date[];
}
