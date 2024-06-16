import { CustomSizesInterface } from './custom-sizes.interface.ts'
import { PageInterface } from './page.interface.ts'
import { EnrichmentInterface } from './enrichtment.interface.ts'

export interface ProductPropertyOptionInterface {
    slug: string
    name?: string
    nullable: boolean
    width?: number | string
    height?: number | string
    parent?: string
    eco?: boolean
    customSizes: CustomSizesInterface
    pages: PageInterface[]
    enrichment: EnrichmentInterface[]
    type?: string
    description: string
}
