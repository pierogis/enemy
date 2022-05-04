import { createUser } from '$lib/database/users';
import type { User } from '@prisma/client';

import type { RequestHandler } from '.svelte-kit/types/src/routes/api/users/index';

export const post: RequestHandler = async ({ request }) => {
	const body: Omit<User, 'id'> = await request.json();

	const partial = {
		discordId: body.discordId
	};

	const user = await createUser(partial);

	if (user) {
		return {
			body: user
		};
	}

	return {
		status: 404
	};
};
