import { introduceMyself } from "../src/index";

describe("introduceMyself", () => {

    it("should introduce me", () => {
        console.log("hello");
        expect(introduceMyself("J", "H")).toEqual("Hello J H");
    });
});