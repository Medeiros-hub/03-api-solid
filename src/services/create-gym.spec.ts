import { beforeEach, describe, expect, it } from 'vitest'
import { CreateGymService } from './create-gym'
import { InMeMoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository'

let gymsRepository: InMeMoryGymsRepository
let sut: CreateGymService

describe('Create Gym Service', () => {
  beforeEach(() => {
    gymsRepository = new InMeMoryGymsRepository()
    sut = new CreateGymService(gymsRepository)
  })

  it('should be able to create gym', async () => {
    const { gym } = await sut.execute({
      title: 'JavaScript Gym',
      description: null,
      phone: null,
      latitude: -7.2303004,
      longitude: -39.310245,
    })

    expect(gym.id).toEqual(expect.any(String))
  })
})
