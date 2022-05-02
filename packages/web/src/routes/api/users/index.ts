import { createUser } from '$lib/database/users';

/** @type {import('./api/users/index').RequestHandler} */
export async function post({ request }) {
	const body = request.json();

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
}
