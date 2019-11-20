import axios from "axios"
import deepmerge = require("deepmerge");

let defaultConfig = {
  headers: {
    // "host": "localhost:5000",
    "connection": "keep-alive",
    "cache-control": "max-age=0",
    "upgrade-insecure-requests": "1",
    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36",
    "sec-fetch-mode": "navigate",
    "sec-fetch-user": "?1",
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3",
    "sec-fetch-site": "cross-site",
    "accept-encoding": "gzip, deflate, br",
    "accept-language": "en-US,en;q=0.9"
  }
}

export let getAxios = (config = {}) => {
  return axios.create( deepmerge( defaultConfig, config ))
}
