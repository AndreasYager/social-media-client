import { remove } from "../../storage/index.js";

const TOKEN = "dsgf87775dejgf294549de";

// Mock the localStorage object
global.localStorage = {
  removeItem: jest.fn(),
};

describe("remove", () => {
  it("removes a token from browser storage", async () => {
    await remove(TOKEN);
    // Check if localStorage.removeItem has been called with the correct token
    expect(global.localStorage.removeItem).toHaveBeenCalledWith(TOKEN);
  });
});
