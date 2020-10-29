/* eslint-disable camelcase */
/* eslint-disable no-console */
// eslint-disable-next-line global-require
const rpc = new (require('./kafkarpc'))();

// make request to kafka
function make_request(queue_name, msg_payload, callback) {
  console.log('in make request');
  console.log(msg_payload);
  // eslint-disable-next-line func-names
  rpc.makeRequest(queue_name, msg_payload, function (err, response) {
    if (err) console.error(err);
    else {
      console.log('response', response);
      callback(null, response);
    }
  });
}

exports.make_request = make_request;
