import module from '../src';

describe('MyModule', () => {
	test('doSomething should exist', () => {
		expect(module.doSomething).toBeDefined();
	});

	describe('doSomething', () => {
		test('Should return the first line of source code', async () => {
			const res = await module.doSomething();

			expect(res).toBe("/* First line */");
		});
	});
});
