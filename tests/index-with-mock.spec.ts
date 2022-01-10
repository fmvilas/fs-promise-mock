import module from '../src';
import fs from 'fs/promises';

jest.mock('fs/promises', () => {
	return {
		readFile: jest.fn()
	};
});

describe('FS Promise mock', () => {
	describe('doSomething', () => {
		beforeEach(() => {
			(fs.readFile as jest.Mock).mockClear();
		});

		test('Should return the first line of source code', async () => {
			(fs.readFile as jest.Mock).mockReturnValue("This is another line \nAnd another\nAnd another");

			const res = await module.doSomething();

			expect(res).toBe("This is another line");
		});
	});
});
