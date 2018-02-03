import Twilio from 'twilio'

export default function (options) {
  const { logger } = options

  return function (req, res) {
    logger.info(`Call to ${req.body.To} from ${req.body.From} status => ${req.body.CallStatus}`)

    let twiml = new Twilio.twiml.VoiceResponse()

    twiml.say('Hello')
    twiml.say('Goodbye')

    res.header('Content-Type', 'text/xml')

    res.send(twiml.toString())
  }
}
