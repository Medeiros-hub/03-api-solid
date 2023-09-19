import { IGymsRepository } from '@/repositories/IGymsRepository'
import { Gym } from '@prisma/client'

interface SearchGymsServiceParams {
  query: string
  page: number
}

interface SearchGymsServiceResponse {
  gyms: Gym[]
}

export class SearchGymsService {
  constructor(private gymsRepository: IGymsRepository) {}

  async execute({
    query,
    page,
  }: SearchGymsServiceParams): Promise<SearchGymsServiceResponse> {
    const gyms = await this.gymsRepository.searchMany(query, page)

    return { gyms }
  }
}
