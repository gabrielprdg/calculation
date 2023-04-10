import { CalculationModel } from "../../../../domain/model/calculation"
import { TypeOrmCalculate } from "../entities/typeorm-calculate"

export class Mapper {
  public static toDomainEntity (typeOrmCalculate: TypeOrmCalculate): CalculationModel {
    console.log('3e', typeOrmCalculate)
    const domain: CalculationModel = {
        id: typeOrmCalculate.id,
        calc: typeOrmCalculate.calc,
        accountId: typeOrmCalculate.accountId,
        created_at: typeOrmCalculate.created_at
    }

    return domain
}

  public static toDomainEntities (typeOrmCalculate: TypeOrmCalculate[]): CalculationModel[] {
      return typeOrmCalculate.map(typeOrmCar => this.toDomainEntity(typeOrmCar))
  }
}
