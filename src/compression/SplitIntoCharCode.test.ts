import { splitIntoCharCode } from "./SplitIntoCharCode"

describe("split-string", () => {
  it("split string", () => {
    expect(splitIntoCharCode("123")).toEqual([49, 50, 51]);
  });

  it("split emojis", () => {
    expect(splitIntoCharCode("💩💩")).toEqual([55357, 56489, 55357, 56489]);
  });
});
