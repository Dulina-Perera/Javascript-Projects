import sum from "./sum";

test('check if 1 + 2 = 3', () => {
	expect(sum(1, 2)).toBe(3);
});

test('object assignment', () => {
	const data = { one: 1 };
	data['two'] = 2;
	expect(data).toStrictEqual({ one: 1, two: 2 });
});
