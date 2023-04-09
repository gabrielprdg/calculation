import { Router } from 'express'
import { adaptRoute } from '../../main/adapters/express-route-adapter'
import { makeAddCarController } from '../../main/factories/controllers/car/add-car/add-car-controller-factory'
import { makeDeleteCarByIdController } from '../../main/factories/controllers/car/delete-car-by-id/delete-car-by-id-controller-factory'

export default (router: Router): void => {
  router.post('/calc', adaptRoute(makeAddCarController()))
  router.get('/calc', adaptRoute(makeDeleteCarByIdController()))
}
