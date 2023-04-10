import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm"
import { CalculationModel } from "../../../../domain/model/calculation"

@Entity('calculate')
export class TypeOrmCalculate implements CalculationModel {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  calc: string

  @Column({nullable: true})
  accountId: string

  @Column({ type: "decimal", precision: 10, scale: 2, default: 0 })
  answer: number

  @CreateDateColumn()
  created_at: Date
}
