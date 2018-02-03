export default function (options) {
  const { phoneNumber, accountId, authToken, logger } = options

  const client = require('twilio')(accountId, authToken)

  return function (req, res) {
    logger.info(`${phoneNumber} says: "${req.body.message}" at ${new Date().toISOString()}...)`)

    client.messages.create({
      body: req.body.message,
      to: `+${req.params.number}`,
      from: `+${phoneNumber}`
    })
    .then(message => {
      res.send(message.sid)
    })
  }
}
