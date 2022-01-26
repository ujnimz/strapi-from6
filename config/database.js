const path = require("path");

module.exports = ({ env }) => ({
  connection: {
    client: "sqlite",
    connection: {
      filename: path.join(
        __dirname,
        "..",
        env("DATABASE_FILENAME", ".tmp/data.db")
      ),
    },
    useNullAsDefault: true,
  },
});

// Below code is for Google Cloud database

// module.exports = ({ env }) => ({
//   connection: {
//     client: "postgres",
//     connector: "bookshelf",
//     connection: {
//       socketPath: `/cloudsql/${env("INSTANCE_CONNECTION_NAME")}`,
//       database: env("DATABASE_NAME"),
//       user: env("DATABASE_USERNAME"),
//       password: env("DATABASE_PASSWORD"),
//     },
//   },
// });
