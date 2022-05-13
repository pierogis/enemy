import { expect, test } from '@playwright/test';

test('should create a user', async ({ request }) => {
	const discordId = 14526543;
	const newUser = await request.post(`/api/users`, {
		data: { discordId }
	});
	expect(newUser.ok()).toBeTruthy();

	const users = await request.get(`/api/users/${(await newUser.json()).id}`);
	expect(users.ok()).toBeTruthy();
	expect(await users.json()).toEqual(expect.objectContaining({ discordId }));
});

test('should create an item', async ({ request }) => {
	const damage = 10;
	const newItem = await request.post(`/api/items`, {
		data: { damage }
	});
	expect(newItem.ok()).toBeTruthy();

	const items = await request.get(`/api/items`);
	expect(items.ok()).toBeTruthy();
	expect(await items.json()).toContainEqual(expect.objectContaining({ damage }));
});
