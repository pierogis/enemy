import { createItem, getItems } from '$lib/database/items';
import type { Item } from '@prisma/client';

import type { RequestHandler } from '.svelte-kit/types/src/routes/api/items/index';

export const get: RequestHandler = async () => {
	const items = await getItems();

	if (items) {
		return {
			body: items
		};
	}

	return {
		status: 404
	};
};

export const post: RequestHandler = async ({ request }) => {
	const body: Omit<Item, 'id'> = await request.json();

	const partial = {
		damage: body.damage
	};

	const item = await createItem(partial);

	if (item) {
		return {
			body: item
		};
	}

	return {
		status: 404
	};
};
