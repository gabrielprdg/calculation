import { CalculationModel } from "../../../../domain/model/calculation"
import { TypeOrmCalculate } from "../entities/typeorm-calculate"

export class Mapper {
  public static toDomainEntity (typeOrmCalculate: TypeOrmCalculate): CalculationModel {
    
    const domain: CalculationModel = {
        id: typeOrmCalculate.id,
        calc: typeOrmCalculate.calc,
        answer: typeOrmCalculate.answer,
        accountId: typeOrmCalculate.accountId,
        created_at: typeOrmCalculate.created_at
    }

    return domain
}

  public static toDomainEntities (typeOrmCalculate: TypeOrmCalculate[]): CalculationModel[] {
      return typeOrmCalculate.map(typeOrmCar => this.toDomainEntity(typeOrmCar))
  }
}
