var expect = require("chai").expect;
var request = require("request");
var { config_url } = require('./config url/configUrl')
var { add_music_publisher_data, get_music_publishers_data, create_collection_data, update_collection_data, get_tracks_music_publisher_data,
  get_collection_data, delete_collection_data, delete_music_publisher_data } = require('./test data/music_publisher_data')

describe("Music Publisher Route API", function () {
  var headersOpt = {
    "content-type": "application/json",
  };
  describe("Add Music Publisher", function () {
    it("returns status 200", function (done) {
      request({
        headers: headersOpt,
        uri: config_url.url + 'v1/add_music_publisher',
        method: 'POST',
        json: true,
        form: add_music_publisher_data
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
  };
  describe("Check License Music Publisher", function () {
    it("returns status 200", function (done) {
      this.timeout(50000);
      request({
        headers: headersOpt,
        uri: config_url.url + 'v1/check_license_mp',
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

describe("Music Publisher Route API", function () {
  var headersOpt = {
    "content-type": "application/json",
  };
  describe("Expire License Music Publisher", function () {
    it("returns status 200", function (done) {
      this.timeout(50000);
      request({
        headers: headersOpt,
        uri: config_url.url + 'v1/expire_license_mp',
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

describe("Music Publisher Route API", function () {
  var headersOpt = {
    "content-type": "application/json",
  };
  describe("Get Music Publisher", function () {
    it("returns status 200", function (done) {
      request({
        headers: headersOpt,
        uri: config_url.url + 'v1/get_music_publishers',
        method: 'POST',
        json: true,
        form: get_music_publishers_data
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
    "content-type": "application/json"
    // "user-token": user_token,
  };
  describe("Create Collection", function () {
    it("returns status 200", function (done) {
      request({
        headers: headersOpt,
        uri: config_url.url + 'v1/create_collection',
        method: 'POST',
        json: true,
        form: create_collection_data
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
    "content-type": "application/json"
    // "user-token": user_token,
  };
  describe("Update Collection", function () {
    it("returns status 200", function (done) {
      request({
        headers: headersOpt,
        uri: config_url.url + 'v1/update_collection',
        method: 'POST',
        json: true,
        form: update_collection_data
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
    "content-type": "application/json"
    // "user-token": user_token,
  };
  describe("Delete Collection", function () {
    it("returns status 200", function (done) {
      request({
        headers: headersOpt,
        uri: config_url.url + 'v1/delete_collection',
        method: 'POST',
        json: true,
        form: delete_collection_data
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
    "content-type": "application/json"
    // "user-token": user_token,
  };
  describe("Get Collection", function () {
    it("returns status 200", function (done) {
      request({
        headers: headersOpt,
        uri: config_url.url + 'v1/get_collection',
        method: 'POST',
        json: true,
        form: get_collection_data
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
    "content-type": "application/json"
    // "user-token": user_token,
  };
  describe("Delete Music Publisher", function () {
    it("returns status 200", function (done) {
      request({
        headers: headersOpt,
        uri: config_url.url + 'v1/delete_music_publisher',
        method: 'POST',
        json: true,
        form: delete_music_publisher_data
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
    "content-type": "application/json"
    // "user-token": user_token,
  };
  describe("Get Tracks Music Publisher", function () {
    it("returns status 200", function (done) {
      request({
        headers: headersOpt,
        uri: config_url.url + 'v1/get_tracks_music_publisher',
        method: 'POST',
        json: true,
        form: get_tracks_music_publisher_data
      }, function (error, response, body) {
        if (!error && response.statusCode == 200) {
          expect(response.statusCode).to.equal(200);
          expect(body.status).to.equal(true);
          done();
        }
      });
    });
  });
});