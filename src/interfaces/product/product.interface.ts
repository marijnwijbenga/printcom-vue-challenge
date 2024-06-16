import { ProductExcludeOptionInterface } from './product-exclude-option.interface.ts'
import { ProductPropertyInterface } from './product-property.interface.ts'

export interface ProductInterface {
    sku: string
    title: string
    properties: ProductPropertyInterface[]
    excludes: ProductExcludeOptionInterface[][]
}
