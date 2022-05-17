import { Response } from 'express'
// import { Container, Service } from 'typedi'
const Msg = (
	message: string,
	data: object,
	res: Response,
	statusCode = 200,
	status = 'success'
) => {
	res.status(statusCode).json({
		status,
		message,
		data,
	})
}

export default Msg
