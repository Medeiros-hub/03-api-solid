import { GetUserMetricsService } from '../get-user-metrics'
import { PrismaCheckInsRepository } from '@/repositories/prisma/prisma-check-ins-repository'

export function makeGetUserMetricsService() {
  const checkInsRepository = new PrismaCheckInsRepository()
  const service = new GetUserMetricsService(checkInsRepository)

  return service
}
