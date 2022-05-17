import { Request, Response, NextFunction } from 'express'
import Exception from '../utils/exception'
import Msg from '../utils/resMsg'

export default function HomePage(
	req: Request,
	res: Response,
	next: NextFunction
) {
	try {
		Msg('homepage fetch successful', { data: 'App homepage' }, res)
	} catch (error) {
		next(new Exception('homepage not accessible', 404))
	}
}
