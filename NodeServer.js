const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const contactRoutes = require("./routes/contactus");
const submitRoutes = require("./routes/submit");
const errorRoutes = require("./routes/error");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);
app.use(contactRoutes);
app.use(submitRoutes);

app.use(errorRoutes);

app.listen(3000);
