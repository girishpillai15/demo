var dbb = require('../../config/collections');
var assert = require('assert');
var ObjectID = require('mongodb').ObjectID;
module.exports = function (db) {
  var admin_module = {
    add_data: function (add_data, callBack) {
      try {
        db.db()
          .collection(dbb.DATA)
          .insertMany(add_data, function (err, result) {
            if (err) {
              callBack(null,true, err);
            } else {
              callBack(null,false, "Added Data Successfully");
            }
          });
      } catch (e) {
        callBack(null, true, e);
      }
    },
    add_question: function (add_question, callBack) {
      try {
        db.db()
          .collection(dbb.DATA)
          .insertOne(add_question, function (err, result) {
            if (err) {
              callBack(null, true, err);
            } else {
              callBack(null, false, "Added Question Successfully");
            }
          });
      } catch (e) {
        callBack(null, true, e);
      }
    },
    get_data: function (callBack) {
      try {
        var result = [];
        var cursor = db
          .db()
          .collection(dbb.DATA)
          .find({});

        cursor.forEach(
          function (doc, err) {
            assert.equal(null, err);
            result = [...result, doc];
          },
          function () {
            if (result.length > 0) {
              callBack(result, false, "Found result");
            } else {
              callBack(null, true, "No result found");
            }
          }
        );
      } catch (e) {
        callBack(null, true, e);
      }
    },
    get_selected_data: function (id, callBack) {
      try {
        db.db().collection(dbb.DATA).findOne({ _id: new ObjectID(id) }, function (err, doc) {
          if (err) {
            callBack(null, true, "error occured");
          } else {
            if (doc) {
              callBack(doc, false, "data founded");
            } else {
              callBack(null, true, "data not found");
            }
          }
        });
      } catch (e) {
        callBack(null, true, e);
      }
    },
    delete_selected_data: function (id, callBack) {
      try {
        db.db().collection(dbb.DATA).deleteOne({ _id: new ObjectID(id) }, function (err, doc) {
          if (err) {
            callBack(null, true, "error occured");
          } else if (doc.deletedCount === 1) {
            callBack(doc, false, "data deleted");
          } else {
            callBack(null, true, "data not deleted");
          }
        });
      } catch (e) {
        callBack(null, true, e);
      }
    },
    update_selected_data: function (id, question, callBack) {
      try {
        db.db()
          .collection(dbb.DATA)
          .updateOne(
            { _id: new ObjectID(id) },
            {
              $set: {
                title: question,
              },
            },
            { upsert: false },
            function (err, result) {
              console.log(result)
              if (err) {
                callBack(null, true, err);
              } else if (result.result.n === 1) {
                callBack(result, false, "Question updated");
              }
            }
          );
      } catch (e) {
        callBack(null, true, e);
      }
    },
  };
  return admin_module;
};
