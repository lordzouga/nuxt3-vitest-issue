import { describe, test, expect } from 'vitest'
import { setup, $fetch } from '@nuxt/test-utils-edge'

describe('Example Test', async () => {
    await setup({
        server: true
    })

    test('this is a test', async () => {
        const { hello } = await $fetch('/api/hello');
        expect(hello).toBe("Hello World");
    }); 
})