import {Router} from 'express'
import {voice, messaging} from './routes'

const router = Router()

export default function (options) {
  router.route('/events')
  .post(voice(options).events)

  router.route('/voice/:number')
  .get(voice(options).outgoing)

  router.route('/voice')
  .post(voice(options).incoming)

  router.route('/messaging')
  .post(messaging(options).incoming)

  router.route('/messaging/:number')
  .post(messaging(options).outgoing)

  return router
}
