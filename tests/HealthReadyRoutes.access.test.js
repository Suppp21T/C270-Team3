// This test file is done by Moses
const request = require("supertest");
const { app } = require("../app");

test("Readiness endpoint returns READY or NOT_READY", async () => {
  const res = await request(app).get("/health/ready");

  // Accept both outcomes (environment-dependent)
  expect([200, 500]).toContain(res.statusCode);

  if (res.statusCode === 200) {
    expect(res.body.status).toBe("READY");
  } else {
    expect(res.body.status).toBe("NOT_READY");
  }
});
