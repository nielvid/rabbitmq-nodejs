import client, { Connection } from 'amqplib'
import { config } from 'dotenv'

config()

const EXCHANGE_TYPE = 'direct'
const EXCHANGE_NAME = 'main'
const KEY = 'myKey'

let connection: Connection
let channel: any

const connectToQueue = async () => {
	try {
		connection = await client.connect(process.env.AMQP_URL || '')
		channel = await connection.createChannel()
		await channel.assertExchange(EXCHANGE_NAME, EXCHANGE_TYPE)
		await channel.assertQueue(process.env.QUEUE_NAME)
		channel.bindQueue(process.env.QUEUE_NAME, EXCHANGE_NAME, KEY)
	} catch (error) {
		console.log(error)
	}
}

connectToQueue()

async function sendDataToQueue(data: any) {
	await channel.sendToQueue(
		process.env.QUEUE_NAME,
		Buffer.from(JSON.stringify(data))
	)

	console.log('data sent to queue')

	await channel.close()
	await connection.close()
}

export default sendDataToQueue
