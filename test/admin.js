var expect = require("chai").expect;
var request = require("request");
var {register_user_data,signin_data,signup_data,reset_password_data} = require('./test data/admin_test_data')
var {config_url} = require('./config url/configUrl')

describe("Admin Route API", function () {
  describe("Regsiter User", function () {
    it("returns status 200", function (done) {
      request.post(config_url.url+'v1/register_user', {
        json:register_user_data
      }, function (error, response, body) {
        if (!error && response.statusCode == 200) {
          expect(response.statusCode).to.equal(200);
          expect(body.status).to.equal(true);
          done();
        }
      }
      );
    });
  });
});

describe("Admin Route API", function () {
  describe("SignUp User", function () {
    it("returns status 200", function (done) {
      request.post(config_url.url+'v1/signup', {
        json:signup_data
      }, function (error, response, body) {
        if (!error && response.statusCode == 200) {
          expect(response.statusCode).to.equal(200);
          done();
        }
      }
      );
    });
  });
});

describe("Admin Route API", function () {
  var headersOpt = {
    "content-type": "application/json",
  };
  describe("SignIn User", function () {
    it("returns status 200", function (done) {
      request({
        headers: headersOpt,
        uri: config_url.url+'v1/signin',
        method: 'POST',
        json: true,
        form: signin_data
      }, function (error, response, body) {
        if (!error && response.statusCode == 200) {
          expect(response.statusCode).to.equal(200);
          done();
        }
      });
    });
  });
});

describe("Admin Route API", function () {
  var headersOpt = {
    "content-type": "application/json",
  };
  describe("Reset Password User", function () {
    it("returns status 200", function (done) {
      this.timeout(50000);
      request({
        headers: headersOpt,
        uri: config_url.url+'v1/reset-password',
        method: 'POST',
        json: true,
        form: reset_password_data
      }, function (error, response, body) {
        if (!error && response.statusCode == 200) {
          expect(response.statusCode).to.equal(200);
          done();
        }
      });
    });
  });
});


describe("Admin Route API", function () {
  var headersOpt = {
    "content-type": "application/json",
  };
  describe("Check License", function () {
    it("returns status 200", function (done) {
      this.timeout(50000);
      request({
        headers: headersOpt,
        uri: config_url.url+'v1/check_license',
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

describe("Admin Route API", function () {
  var headersOpt = {
    "content-type": "application/json",
  };
  describe("Expire License", function () {
    it("returns status 200", function (done) {
     this.timeout(50000);
      request({
        headers: headersOpt,
        uri: config_url.url+'v1/expire_license',
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