import { test } from '@playwright/test'
import { login } from 'playwright-test'

test.describe('test login using playwright-test', () => {
  test('login', async function ({ page }) {
    await login(page)
  })
})
