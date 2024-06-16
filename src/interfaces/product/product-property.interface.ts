import { ProductPropertyOptionInterface } from './product-property-option.interface.ts'
import { ViewModeInterface } from './view-mode.interface.ts'

export interface ProductPropertyInterface {
    slug: string
    title: string
    locked: boolean
    options: ProductPropertyOptionInterface[]
    viewMode?: ViewModeInterface
    type: string
    optionsInSummary?: string[]
    parentOptions?: Partial<ProductPropertyOptionInterface>[]
}
