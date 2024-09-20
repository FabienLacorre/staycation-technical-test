import { Entity, PrimaryGeneratedColumn, Column, Unique } from "typeorm";

@Entity()
export class Rooms {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  hotel_id: number;
}
