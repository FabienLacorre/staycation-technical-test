import { Entity, PrimaryGeneratedColumn, Column, Unique } from "typeorm";

@Entity()
export class Opening {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  sale_id: string;

  @Column()
  room_id: string;

  @Column()
  date: Date;

  @Column()
  stock: number;

  @Column()
  price: number;

  @Column()
  discount_price: number;
}
