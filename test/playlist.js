var expect = require("chai").expect;
var request = require("request");
var {user_token_data,create_playlist_data,update_playlist_data,delete_playlist_data} = require('./test data/playlist_data')
var {config_url} = require('./config url/configUrl')
describe("Music Publisher Route API", function () {
  var headersOpt = {
    "content-type": "application/json",
    "user-token":user_token_data.user_token,
  };
  describe("Create Playlist", function () {
    it("returns status 200", function (done) {
      request({
        headers: headersOpt,
        uri: config_url.url+'v1/create_playlist',
        method: 'POST',
        json: true,
        form:create_playlist_data
      }, function (error, response, body) {
        if (!error && response.statusCode == 200) {
          expect(response.statusCode).to.equal(200);
          done();
        }
      });
    });
  });
});

describe("Music Publisher Route API", function () {
  var headersOpt = {
    "content-type": "application/json",
     "user-token":user_token_data.user_token,
  };
  describe("Update Playlist", function () {
    it("returns status 200 ", function (done) {
      request({
        headers: headersOpt,
        uri: config_url.url+'v1/update_playlist',
        method: 'POST',
        json: true,
        form: update_playlist_data
      }, function (error, response, body) {
        if (!error && response.statusCode == 200) {
          expect(response.statusCode).to.equal(200);
          done();
        }
      });
    });
  });
});

describe("Music Publisher Route API", function () {
  var headersOpt = {
    "content-type": "application/json",
     "user-token":user_token_data.user_token,
  };
  describe("Delete Playlist", function () {
    it("returns status 200", function (done) {
      request({
        headers: headersOpt,
        uri: config_url.url+'v1/delete_playlist',
        method: 'POST',
        json: true,
        form: delete_playlist_data
      }, function (error, response, body) {
        if (!error && response.statusCode == 200) {
          expect(response.statusCode).to.equal(200);
          done();
        }
      });
    });
  });
});

describe("Music Publisher Route API", function () {
  var headersOpt = {
    "content-type": "application/json",
     "user-token":user_token_data.user_token,
  };
  describe("Get Playlist", function () {
    it("returns status 200", function (done) {
      request({
        headers: headersOpt,
        uri: config_url.url+'v1/get_playlist',
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