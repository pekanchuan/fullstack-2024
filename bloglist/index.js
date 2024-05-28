const { PORT, MONGODB_URI } = require("./utils/config");
const { info, error } = require("./utils/logger");
const app = require("./app");

app.listen(PORT, () => {
  info(`Server running on port ${PORT}`);
});
