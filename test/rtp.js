var expect = require("chai").expect;
var request = require("request");
var {user_token_data} = require('./test data/rtp_data')
var {config_url} = require('./config url/configUrl')

describe("RTP Route API", function () {
  var headersOpt = {
    "content-type": "application/json",
     "user-token":user_token_data.user_token,
  };
  describe("Get RTP", function () {
    it("returns status 200", function (done) {
      request({
        headers: headersOpt,
        uri: config_url.url+'v1/get_rtp',
        method: 'POST',
        json: true,
      }, function (error, response, body) {
        if (!error && response.statusCode == 200) {
          expect(response.statusCode).to.equal(200);
          done();
        }
      });
    });
  });
});

describe("RTP Route API", function () {
  var headersOpt = {
    "content-type": "application/json"
  };
  describe("Get RTP For Admin", function () {
    it("returns status 200", function (done) {
      request({
        headers: headersOpt,
        uri: config_url.url+'v1/get_rtp_admin',
        method: 'POST',
        json: true,
      }, function (error, response, body) {
        if (!error && response.statusCode == 200) {
          expect(response.statusCode).to.equal(200);
          done();
        }
      });
    });
  });
});