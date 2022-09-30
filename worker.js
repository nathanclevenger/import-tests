import apis from 'https://raw.githubusercontent.com/drivly/apis.do/main/apis.js'
import { json } from 'http://pkg.do/itty-router-extras'

export default {
  fetch: req => json({ apis })
}
