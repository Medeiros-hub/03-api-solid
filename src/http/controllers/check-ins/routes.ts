import { FastifyInstance } from 'fastify'

import { verifyJWT } from '@/http/hooks/verify-jwt'

import { createController } from './create-controller'
import { validateController } from './validate-controller'
import { historyController } from './history-controller'
import { metricsController } from './metrics-controller'
import { verifyUserRole } from '@/http/hooks/verify-user-role'

export async function checkInsRoutes(app: FastifyInstance) {
  app.addHook('onRequest', verifyJWT)

  app.get('/check-ins/history', historyController)
  app.get('/check-ins/metrics', metricsController)

  app.post('/gyms/:gymId/check-ins', createController)
  app.patch(
    '/check-ins/:checkInId/validate',
    { onRequest: [verifyUserRole('ADMIN')] },
    validateController,
  )
}
