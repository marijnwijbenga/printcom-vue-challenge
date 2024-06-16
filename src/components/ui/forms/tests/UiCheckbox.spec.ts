import { DOMWrapper, mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import UiCheckbox from '../UiCheckbox.vue'

describe('UiCheckbox', () => {
    test('renders with the correct id and name props', () => {
        const wrapper = mount(UiCheckbox, {
            props: {
                id: 'test-id',
                name: 'test-name',
            },
        })

        const input: DOMWrapper<HTMLInputElement> = wrapper.find('input')
        expect(input.attributes('id')).toBe('test-id')
        expect(input.attributes('name')).toBe('test-name')
    })
})
