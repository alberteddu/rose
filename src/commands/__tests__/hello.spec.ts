import Hello from '../hello';

describe('hello', () => {
    let result: string[];

    beforeEach(() => {
        result = [];
        jest.spyOn(process.stdout, 'write').mockImplementation(val => !!result.push(val));
    });

    it('should run hello', async () => {
        await Hello.run([]);
        expect(result).toStrictEqual([
            `hello world from ./src/commands/hello.ts
`,
        ]);
    });

    it('should run hello mark', async () => {
        await Hello.run(['--name', 'mark']);
        expect(result).toStrictEqual([
            `hello mark from ./src/commands/hello.ts
`,
        ]);
    });

    it('should run if', async () => {
        await Hello.run(['--name', 'mark', '--force', '--file']);
        expect(result).toStrictEqual([
            `hello mark from ./src/commands/hello.ts
`,
            `you input --force and --file: --file
`,
        ]);
    });

    afterEach(() => jest.restoreAllMocks());
});
