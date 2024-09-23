import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Hotels } from "./Hotels";

@Entity()
export class Reviews {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  hotel_id: number;

  @Column()
  user_id: number;

  @Column()
  score: number;

  @ManyToOne(() => Hotels, (hotel) => hotel.review)
  @JoinColumn()
  hotel: Hotels;
}
