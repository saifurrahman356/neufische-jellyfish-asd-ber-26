export type User = {
  username: string;
  status: "online" | "offline";
  lastActivity: number;
};

export type OnlineStatus = {
  online: string[];
  offline: string[];
  away: string[];
};

export function whosOnline(users: User[]): OnlineStatus {
  const result: OnlineStatus = {
    online: [],
    offline: [],
    away: [],
  };

  for (const user of users) {
    if (user.status === "offline") {
      result.offline.push(user.username);
    } else if (user.lastActivity > 10) {
      result.away.push(user.username);
    } else {
      result.online.push(user.username);
    }
  }

  return result;
}
