import type { Relationship } from './Relationship'

export enum Gender {
  MALE = 'Male',
  FEMALE = 'Female',
}

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace Gender {
  export function toFirstLetter(gender: Gender): 'M' | 'F' {
    switch (gender) {
      case Gender.MALE:
        return 'M'
      case Gender.FEMALE:
        return 'F'
    }
  }
}

export interface Person {
  id: number
  first_name: string
  last_name: string
  birthday: string | Date
  gender: Gender
  father_id: number | null
  mother_id: number | null
  children_ids: number[]
  relationships: Relationship[]
}
