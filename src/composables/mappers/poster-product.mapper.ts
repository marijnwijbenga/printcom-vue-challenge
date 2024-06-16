import { ProductInterface } from '../../interfaces/product/product.interface.ts'
import { ProductPropertyInterface } from '../../interfaces/product/product-property.interface.ts'
import { ProductExcludeOptionInterface } from '../../interfaces/product/product-exclude-option.interface.ts'
import { ProductPropertyOptionInterface } from '../../interfaces/product/product-property-option.interface.ts'
import { PageInterface } from '../../interfaces/product/page.interface.ts'
import { ParentOptionInterface } from '../../interfaces/product/parent-option.interface.ts'
import { EnrichmentInterface } from '../../interfaces/product/enrichtment.interface.ts'

export function usePosterProductMapper() {
    // you could opt for writing out the interfaces for the incoming data but that takes up too much time for now
    // never a fan of any, but at least we are returning typed objects here

    const mapPosterProduct = (posterData: any): ProductInterface => {
        return {
            excludes: posterData.excludes ? posterData.excludes.map((exclude: any) => mapPosterExclude(exclude)) : [],
            properties: posterData.properties
                ? posterData.properties.map((property: any) => mapPosterProperty(property))
                : [],
            sku: posterData.sku,
            title: posterData.title,
        }
    }

    const mapPosterProperty = (posterProperty: any): ProductPropertyInterface => {
        return {
            locked: posterProperty.locked,
            options: posterProperty.options
                ? posterProperty.options.map((option: any) => mapPosterPropertyOption(option))
                : [],
            optionsInSummary: posterProperty.optionsInSummary ? posterProperty.optionsInSummary : [],
            parentOptions: posterProperty.parentOptions
                ? posterProperty.parentOptions.map((parentOption: any) => mapParentOption(parentOption))
                : [],
            slug: posterProperty.slug,
            title: posterProperty.title,
            type: posterProperty.type,
            viewMode: posterProperty.viewMode,
        }
    }

    const mapPosterExclude = (posterExclude: any): ProductExcludeOptionInterface => {
        return {
            options: posterExclude.options ? posterExclude.options : [],
            property: posterExclude.property,
        }
    }

    const mapParentOption = (parentOption: any): ParentOptionInterface => {
        return {
            eco: parentOption.eco,
            enrichments: parentOption.enrichments
                ? parentOption.enrichments.map((enrichtment: any) => mapEnrichment(enrichtment))
                : [],
            name: parentOption.name,
            nullable: parentOption.nullable,
            parent: parentOption.parent,
            slug: parentOption.slug,
        }
    }

    const mapEnrichment = (enrichtment: any): EnrichmentInterface => {
        return {
            optionSlug: enrichtment.optionSlug,
            propertySlug: enrichtment.propertySlug,
        }
    }

    const mapPosterPropertyOption = (option: any): ProductPropertyOptionInterface => {
        return {
            customSizes: option.customSizes,
            description: option.description,
            eco: option.eco,
            enrichment: option.enrichment,
            width: option.width,
            height: option.height,
            name: option.name,
            nullable: option.nullable,
            pages: option.pages ? option.pages.map((page: any) => mapPosterPage(page)) : [],
            parent: option.parent,
            slug: option.slug,
            type: option.type,
        }
    }

    const mapPosterPage = (page: any): PageInterface => {
        return {
            colorspace: page.colorspace,
            numberOfColors: page.numberOfColors,
        }
    }

    return { mapPosterProduct }
}
