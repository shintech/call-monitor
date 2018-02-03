export default function (options) {
  const { phoneNumber, accountId, authToken, serverURL } = options

  const client = require('twilio')(accountId, authToken)

  return function (req, res) {
    client.calls.create({
      url: `${serverURL}/voice`,
      to: `+${req.params.number}`,
      from: `+${phoneNumber}`,
      statusCallback: `${serverURL}/events`,
      statusCallbackMethod: 'POST',
      statusCallbackEvent: ['initiated', 'ringing', 'answered', 'complete']
    }, (err, call) => {
      if (err) return console.log(err)
      res.send(call.sid)
    })
  }
}
