const fs = require("fs");
const app = express();
const port = process.env.PORT || 80;
app.listen(port, () => {
    console.log("hi");
});
app.get("/", (req, res) => {
res.end("kokoo");});
