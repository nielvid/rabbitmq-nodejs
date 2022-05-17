import { app, PORT } from './app'

const main = async () => {
	app.listen(PORT, () => {
		console.log(`Connected successfully on port ${PORT}`)
	})
}

main().catch((err) => console.error(err))
