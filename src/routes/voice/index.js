import _events from './events'
import _incoming from './incoming'
import _outgoing from './outgoing'

export default function (options) {
  return {
    events: _events(options),
    incoming: _incoming(options),
    outgoing: _outgoing(options)
  }
}
