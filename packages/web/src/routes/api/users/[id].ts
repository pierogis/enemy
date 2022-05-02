import { getUser } from '$lib/database/users';

/** @type {import('./api/users/[id]').RequestHandler} */
export async function get({ params }) {
	const user = await getUser(params.id);

	if (user) {
		return {
			body: user
		};
	}

	return {
		status: 404
	};
}
