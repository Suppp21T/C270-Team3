//This pool is shared by all test files during the test run
require('dotenv').config({ path: '.env.test' });

//Load .env.test only for local testing and skip it in CI to avoid overriding GitHub secrets
if (!process.env.CI) {
  require('dotenv').config({ path: '.env.test' });
}

const { pool } = require("../app");

//This runs once after all test files have finished and closes all db connections opened by this test run
//This prevents leftover ("sleeping") connections from causing max_user_connections errors in future test runs
afterAll(async () => {
  await pool.end();
});
