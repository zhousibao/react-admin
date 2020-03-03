//import axios from 'axios'
import JSONP from 'jsonp'

export default class Axios{
  // jsonp
  static jsonp(options){
    return new Promise((resolve,reject) => {
      JSONP(options.url, {
        param: 'callback'
    }, function (err, response) {
        if (response.status == 'success') {
            resolve(response);
        } else {
            reject(response.messsage);
        }
    })
    })
  }
}