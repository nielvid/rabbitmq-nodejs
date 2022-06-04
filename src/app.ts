import 'reflect-metadata'
import express, { Application, Request, Response, NextFunction } from 'express'
import { config } from 'dotenv'
import cors from 'cors'
import helmet from 'helmet'
import AppRouter from './routes/router'

export const app: Application = express()
config()

// Body parsing Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(helmet())
app.use(AppRouter)

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
	res.status(err.status || 500).json({
		status: 'error',
		statusCode: err.status,
		message: err.message,
		data: '',
	})
})

export const { PORT } = process.env
