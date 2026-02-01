// Load test env vars locally only; CI uses GitHub Secrets instead
if (!process.env.CI) {
  require('dotenv').config({ path: '.env.test' });
}
const { pool } = require("../app");

//This runs once after all test files have finished and closes all db connections opened by this test run
//This prevents leftover ("sleeping") connections from causing max_user_connections errors in future test runs
afterAll(async () => {
  await pool.end();
});
