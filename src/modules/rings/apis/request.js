import fetch from 'dva/fetch';
const crypto = require('crypto');

function checkStatus(res) {
  // TODO
  return res;
}

function parseJSON(res) {
  return res.json();
}

window.LOOPRING_PROVIDER_HOST = 'https://relay1.loopring.io/rpc'

let checkHost = ()=>{
  if(!window.LOOPRING_PROVIDER_HOST){
    throw new Error('host is required. Do not forget: new Loopring(host)')
  }
}


function request(options) {
  checkHost()
  let url = window.LOOPRING_PROVIDER_HOST

  let method
  if(options.body){
    method = options.body.method;
    options.body.id = id();
    options.body = JSON.stringify(options.body)
  }
  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
    .then(res=>{
      console.log(`${method} response:`,res);
      if (res.error){
          throw new Error('res error: '+ res.error.message)
      }
      return res
    })
    // .catch(error=>{
    //   throw new Error(error)
    // })
}

function id() {
    return crypto.randomBytes(8).toString('hex');
}

export default request;
