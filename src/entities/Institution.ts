import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { Category } from "./Category";

@Entity("institutions")
class Institution {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  name: string;

  @Column()
  cnpj: string;

  @Column()
  site: string;

  @Column()
  wallet: string;

  @JoinColumn({ name: "category_id" })
  @OneToOne(() => Category)
  category_id: Category;

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

export { Institution };
