import request from "supertest";
import createApp from "../main/app";
describe("Test the root path", () => {
    test("It should return cached value on GET", () => {
        const app = createApp({});
        return request(app).post("/").expect(200);
    });
});
