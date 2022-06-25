import { extractWordParts } from "./utilities";

describe("extractWordParts", () => {
    it("should extract the correct word parts when a word contains an odd amount of characters", () => {
        const word = "hello";
        const parts = extractWordParts(word);

        expect(parts).toEqual({ left: "he", middle: "l", right: "lo" });
    });

    it("should extract the correct word parts when a word contains an even amount of characters", () => {
        const word = "cars";
        const parts = extractWordParts(word);

        expect(parts).toEqual({ left: "c", middle: "ar", right: "s" });
    });
});
