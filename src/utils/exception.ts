export default class Exception extends Error {
	status: number

	constructor(message: any, status: number) {
		super()
		this.message = message
		this.status = status
	}
}
