import _incoming from './incoming'
import _outgoing from './outgoing'

export default function (options) {
  return {
    incoming: _incoming(options),
    outgoing: _outgoing(options)
  }
}
