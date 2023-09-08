const path = require("path");
const rootDir = require("../util/path");


exports.afterSubmission = (req, res, next) => {
    res.sendFile(path.join(rootDir, "views", "success.html"));
};
