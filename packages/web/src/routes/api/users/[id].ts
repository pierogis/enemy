import { getUser } from '$lib/database/users';

import type { RequestHandler } from '.svelte-kit/types/src/routes/api/users/[id]';

export const get: RequestHandler = async ({ params }) => {
	const user = await getUser({ id: parseInt(params.id) });

	if (user) {
		return {
			body: user
		};
	}

	return {
		status: 404
	};
};
