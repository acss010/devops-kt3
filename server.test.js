const request = require("supertest");
const app = require("./server");

describe("KT3 App", () => {
  test("GET / returns 'KT3 App'", async () => {
    const res = await request(app).get("/");
    expect(res.status).toBe(200);
    expect(res.text).toBe("\u041a\u04223 App");
  });

  test("GET /health returns { status: 'ok' }", async () => {
    const res = await request(app).get("/health");
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ status: "ok" });
  });
});
