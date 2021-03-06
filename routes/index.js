module.exports = app => {
  // Route files
  const auth = require("./auth");
  const bootcamps = require("./bootcamps");
  const courses = require("./courses");
  const users = require("./users");
  const reviews = require("./reviews");

  // Mount routers
  app.use("/api/v1/auth", auth);
  app.use("/api/v1/bootcamps", bootcamps);
  app.use("/api/v1/courses", courses);
  app.use("/api/v1/users", users);
  app.use("/api/v1/reviews", reviews);
};
