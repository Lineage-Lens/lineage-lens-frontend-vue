export interface Person {
  id: number
  first_name: string
  last_name: string
  birthday: string | Date
  gender: 'M' | 'F'
  father_id: number | null
  mother_id: number | null
  children_ids: number[]
}
