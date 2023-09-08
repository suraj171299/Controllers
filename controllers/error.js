const rootDir = require("../util/path");
const path = require("path");

exports.error = (req, res, next) => {
    res.status(404).sendFile(
        path.join(rootDir, "views", "page-not-found.html")
    );
};
