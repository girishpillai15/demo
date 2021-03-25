var axios = require('axios');
module.exports = {
  configure: function (app, ensureAuthorized, db) {
    var admin_module = require("../../modules/v1/admin_module")(db);

    app.post("/v1/add_question", ensureAuthorized, function (req, res) {
      try {
        if (
          req.body.hasOwnProperty("question")
        ) {

          var newQuestionDetails = {
            tags: [],
            owner: {},
            is_answered: false,
            view_count: 0,
            answer_count: 0,
            score: 0,
            last_activity_date: new Date(),
            creation_date: new Date(),
            question_id: Math.random().toString().slice(2, 11),
            content_license: "",
            link: "",
            title: req.body.question,
          };
          admin_module.add_question(newQuestionDetails, function (result, error, message) {
            if (error) {
              res.json({ status: false, message: message });
            } else {
              res.json({
                status: true,
                message: message,
              });
            }
          });

        } else {
          if (req.body.hasOwnProperty("question") == false) {
            res.json({ status: false, message: "question parameter missing" });
          }
        }
      } catch (er) {
        console.log("error occured : " + er);
        res.json({ status: false, message: "failed at try" });
      }
    });

    app.post("/v1/add_data", ensureAuthorized, function (req, res) {
      try {
        axios.get('https://api.stackexchange.com/2.2/search/advanced?page=18&pagesize=20&order=desc&sort=activity&site=stackoverflow')
          .then((response) => {
            // console.log(response.data);
            admin_module.add_data(response.data.items, function (result, error, message) {
              if (error) {
                res.json({ status: false, message: message });
              } else {
                res.json({
                  status: true,
                  message: message,
                });
              }
            });

          });
      } catch (er) {
        console.log("error occured : " + er);
        res.json({ status: false, message: "failed at try" });
      }
    });

    app.get("/v1/get_data", ensureAuthorized, function (req, res) {
      try {
        admin_module.get_data(function (result, error, message) {
          if (error) {
            res.json({ status: false, message: message });
          } else {
            res.json({
              status: true,
              message: message,
              result
            });
          }
        });
      } catch (er) {
        console.log("error occured : " + er);
        res.json({ status: false, message: "failed at try" });
      }
    });

    app.get("/v1/get_data/:id", ensureAuthorized, function (req, res) {
      try {
        admin_module.get_selected_data(req.params.id, function (result, error, message) {
          if (error) {
            res.json({ status: false, message: message });
          } else {
            res.json({
              status: true,
              message: message,
              result
            });
          }
        });
      } catch (er) {
        console.log("error occured : " + er);
        res.json({ status: false, message: "failed at try" });
      }
    });

    app.delete("/v1/delete_data/:id", ensureAuthorized, function (req, res) {
      try {
        admin_module.delete_selected_data(req.params.id, function (result, error, message) {
          if (error) {
            res.json({ status: false, message: message });
          } else {
            res.json({
              status: true,
              message: message,
            });
          }
        });
      } catch (er) {
        console.log("error occured : " + er);
        res.json({ status: false, message: "failed at try" });
      }
    });

    app.patch("/v1/update_data/:id", ensureAuthorized, function (req, res) {
      try {
        admin_module.update_selected_data(req.params.id, req.body.question, function (result, error, message) {
          if (error) {
            res.json({ status: false, message: message });
          } else {
            res.json({
              status: true,
              message: message,
            });
          }
        });
      } catch (er) {
        console.log("error occured : " + er);
        res.json({ status: false, message: "failed at try" });
      }
    });

    //End of Logout
  },
};
