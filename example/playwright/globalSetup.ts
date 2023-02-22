import { expect } from "@playwright/test"

export default async function globalSetup() {
  expect(1).toBe(1);
}
