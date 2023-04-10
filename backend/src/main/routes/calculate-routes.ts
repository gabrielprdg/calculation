import { Router } from 'express'
import { adaptRoute } from '../adapters/express-route-adapter'
import { makeCalculateController } from '../factories/controllers/calculate/calculate-controller-factory'
import { makeLoadCalculationsController } from '../../main/factories/controllers/calculate/load-calculations-controller'

export default (router: Router): void => {
  router.post('/calc', adaptRoute(makeCalculateController()))
  router.get('/calculations', adaptRoute(makeLoadCalculationsController()))
}
