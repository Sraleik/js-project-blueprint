import { inject, injectable } from 'inversify'

@injectable()
export class Example {
	constructor(@inject('ExampleKey') public apiKey: string) {}

	sum(a: number, b: number): number {
		return a + b
	}
}
