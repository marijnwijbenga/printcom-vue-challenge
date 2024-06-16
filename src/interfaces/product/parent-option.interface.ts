import { EnrichmentInterface } from './enrichtment.interface.ts'

export interface ParentOptionInterface {
    slug: string
    name: string
    nullable: boolean
    eco: boolean
    enrichments: EnrichmentInterface[]
    parent: string
}
