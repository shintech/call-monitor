export default function (options) {
  const { logger } = options

  return function (req, res) {
    let to = req.body.To
    let fromNumber = req.body.From
    let callStatus = req.body.CallStatus

    logger.info(`Call to ${to} from ${fromNumber} Status => ${callStatus}`)

    res.status(200)
    .send('Event received...')
  }
}
