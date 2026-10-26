import { describe, expect, it } from "vitest";
import { whosOnline, type User } from "../../src/day1-welcome/whosOnline";

describe("whosOnline", () => {
  it("returns empty groups when there are no users", () => {
    expect(whosOnline([])).toEqual({ online: [], offline: [], away: [] });
  });

  it("classifies active users as online", () => {
    const users: User[] = [
      { username: "alice", status: "online", lastActivity: 0 },
      { username: "bob", status: "online", lastActivity: 5 },
      { username: "carol", status: "online", lastActivity: 10 },
    ];

    expect(whosOnline(users)).toEqual({
      online: ["alice", "bob", "carol"],
      offline: [],
      away: [],
    });
  });

  it("classifies online users inactive for more than 10 minutes as away", () => {
    const users: User[] = [
      { username: "dave", status: "online", lastActivity: 11 },
      { username: "erin", status: "online", lastActivity: 30 },
    ];

    expect(whosOnline(users)).toEqual({
      online: [],
      offline: [],
      away: ["dave", "erin"],
    });
  });

  it("classifies offline users as offline regardless of last activity", () => {
    const users: User[] = [
      { username: "frank", status: "offline", lastActivity: 0 },
      { username: "grace", status: "offline", lastActivity: 100 },
    ];

    expect(whosOnline(users)).toEqual({
      online: [],
      offline: ["frank", "grace"],
      away: [],
    });
  });

  it("groups mixed users correctly and preserves their input order within each group", () => {
    const users: User[] = [
      { username: "alice", status: "online", lastActivity: 1 },
      { username: "bob", status: "offline", lastActivity: 2 },
      { username: "carol", status: "online", lastActivity: 11 },
      { username: "dave", status: "online", lastActivity: 10 },
      { username: "erin", status: "offline", lastActivity: 50 },
    ];

    expect(whosOnline(users)).toEqual({
      online: ["alice", "dave"],
      offline: ["bob", "erin"],
      away: ["carol"],
    });
  });

  it("does not mutate the input array", () => {
    const users: User[] = [
      { username: "alice", status: "online", lastActivity: 1 },
      { username: "bob", status: "offline", lastActivity: 5 },
    ];
    const original = structuredClone(users);

    whosOnline(users);

    expect(users).toEqual(original);
  });
});
