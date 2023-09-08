const rootDir = require("../util/path");
const path = require("path");

exports.addContacts = (req, res, next) => {
    res.sendFile(path.join(rootDir, "views", "contactus.html"));
};

exports.postContacts = (req, res, next) => {
    console.log(req.body);
    res.redirect("/success");
};
