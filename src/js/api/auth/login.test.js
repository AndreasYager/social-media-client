import { login } from "./login.js";

const GOOD_EMAIL = "testing@noroff.no";
const BAD_EMAIL = "wrongemail@mail.com";
const PASSWORD = "12345678";
const TOKEN = "dsgf87775dejgf294549de";
const profile = {
  name: "Andreas",
  email: GOOD_EMAIL,
};

// Assuming jest environment is set up with globals like `describe`, `beforeEach`, `it`, `expect`
describe("login", () => {
  beforeEach(() => {
    global.localStorage = {
      setItem: jest.fn(),
      getItem: jest.fn(),
      removeItem: jest.fn(),
      clear: jest.fn(),
    };

    global.fetch = jest.fn(() => fetchSuccess());
  });

  it("fetches and stores a token in browser storage", async () => {
    const data = await login(GOOD_EMAIL, PASSWORD);
    expect(GOOD_EMAIL).toMatch("@noroff.no");
    expect(data.token).toEqual(TOKEN); // Changed 'data.TOKEN' to 'data.token' to match the object key case
  });
});

async function fetchSuccess(status = 201, statusText = "Success!") {
  return Promise.resolve({
    ok: true,
    status,
    statusText,
    json: async () => Promise.resolve({ ...profile, token: TOKEN }), // Changed 'TOKEN' to 'token' for consistency
  });
}
