import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm"
import { CalculationModel } from "../../../../domain/model/calculation"

@Entity('calculate')
export class TypeOrmCalculate implements CalculationModel {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  calc: string

  @Column()
  accountId: string

  @Column()
  answer: number

  @CreateDateColumn()
  created_at: Date
}
