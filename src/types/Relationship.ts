export enum RelationshipType {
  DATING = 'Dating',
  ENGAGED = 'Engaged',
  MARRIED = 'Married',
}

export interface Relationship {
  id: number
  relationship_type: RelationshipType
  start_date: string | Date
  people_ids: number[]
}
