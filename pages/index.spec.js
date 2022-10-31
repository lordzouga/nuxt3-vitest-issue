import { describe, test } from 'vitest'
import { setup, fetch } from '@nuxt/test-utils-edge'

describe('Example Test', async () => {
    await setup({
        server: true
    })

    test('this is a test', async () => {
        const response = fetch('https://google.com');
        console.log(response);
    }); 
})