import { FastifyInstance } from 'fastify'

import { verifyJWT } from '@/http/hooks/verify-jwt'

import { createController } from './create-controller'
import { searchController } from './search-controller'
import { nearbyController } from './nearby-controller'
import { verifyUserRole } from '@/http/hooks/verify-user-role'

export async function gymsRoutes(app: FastifyInstance) {
  app.addHook('onRequest', verifyJWT)

  app.get('/gyms/search', searchController)
  app.get('/gyms/nearby', nearbyController)

  app.post('/gyms', { onRequest: [verifyUserRole('ADMIN')] }, createController)
}
