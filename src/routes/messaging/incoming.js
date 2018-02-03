export default function (options) {
  const { logger } = options

  return function (req, res) {
    const body = req.body
    logger.info(`${body.From} says: "${body.Body}" at ${new Date().toISOString()}...`)
    res.end()
  }
}
