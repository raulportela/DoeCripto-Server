import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { Institution } from "./Institution";

@Entity("donations")
class Donation {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  isAnonymousDonation: boolean;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  quantityCoin: number;

  @JoinColumn({ name: "institution_id" })
  @ManyToOne(() => Institution, (institution) => institution.id)
  institutionId: Institution;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Donation };
