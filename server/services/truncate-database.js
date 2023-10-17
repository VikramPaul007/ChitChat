var axios = require("axios");

function trucateDatabase() {
  const dbUrl = process.env.HARPERDB_URL;
  const dbPw = process.env.HARPERDB_PW;

  if (!dbUrl || !dbPw) return "Invalid username or password";
}
