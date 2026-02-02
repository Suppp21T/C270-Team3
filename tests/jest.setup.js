//This pool is shared by all test files during the test run

process.env.NODE_ENV = 'test';
// Set these BEFORE app.js is imported
// Ensure env exists so app.js never becomes ''@localhost during tests
process.env.DB_HOST ||= 'fh6-v0.h.filess.io';
process.env.DB_PORT ||= '61002';
process.env.DB_USER ||= 'C270_Perfume_tastestill';
process.env.DB_PASS ||= '0cb1e8502b416ca311f34a5d3a075728e08ddb13';
process.env.DB_NAME ||= 'C270_Perfume_tastestill';

const { pool } = require("../app");
//This runs once after all test files have finished and closes all db connections opened by this test run
//This prevents leftover ("sleeping") connections from causing max_user_connections errors in future test runs
afterAll(async () => {
  await pool.end();
});

