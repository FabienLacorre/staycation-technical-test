import { Entity, PrimaryGeneratedColumn, Column, Unique } from "typeorm";

@Entity()
export class Booking {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: Date;

  @Column()
  user_id: number;

  @Column()
  room_id: number;
}
