import { prisma } from '.';
import type { Item } from '@prisma/client';

export async function getItems(
	params?: Partial<Omit<Item, 'isAdmin'>>,
	take?: number,
	skip = 0
): Promise<Item[]> {
	const items = await prisma.item.findMany({ where: params, take, skip });

	return items;
}

export async function getItem(params: Partial<Item>) {
	const item = await prisma.item.findUnique({
		where: params
	});

	return item;
}

export async function createItem(partial: Omit<Item, 'id'>) {
	const item = await prisma.item.create({ data: partial });

	return item;
}

export async function updateItem(item: Partial<Item> & Pick<Item, 'id'>): Promise<Item> {
	const { id, ...data } = item;
	return await prisma.item.update({ where: { id }, data });
}

export async function deleteItem(id: number): Promise<void> {
	await prisma.item.delete({ where: { id } });
}
