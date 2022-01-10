/* First line */

import fs from 'fs/promises';

class MyModule {
	public async doSomething(): Promise<string> {
		const content = await fs.readFile(__filename);

		return content.toString().split("\n")[0].trim();
	}
}

const inst = new MyModule();

export default inst;
