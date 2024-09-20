import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Openings {
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
