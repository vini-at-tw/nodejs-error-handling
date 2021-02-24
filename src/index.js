const app = require("./core/app");
const config = require("./config");

app.listen(config.port, () => {
  console.log(`Listening at http://localhost:${config.port}`);
});
