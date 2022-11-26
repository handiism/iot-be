import { server } from "./app";
import request from "supertest";

describe("GET /", () => {
  it("responds with json", async function () {
    const res = await request(server).get("/");

    expect(res.statusCode).toEqual(200);
    expect(res.type).toEqual("application/json");
    expect(res.body).toEqual({ ping: "pong" });
  });

  server.close();
});
