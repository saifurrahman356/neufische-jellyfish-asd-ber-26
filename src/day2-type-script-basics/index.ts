interface Night {
  id: number;
  name: string;
}

type NightWithDescription = Night & {
  description: string;
  date: Date;
  location?: string;
};

const night = {
  id: 1,
  name: "Night",
  description: "This is the first night.",
  date: new Date("2024-06-01"),

  location: "New York",
};

function describeNight(night: Night): string {
  return `Night ${night.id}: ${night.name}`;
}

const nightWithDescription: NightWithDescription = {
  ...night,
  description: "This is the first night.",
  date: new Date("2024-06-01"),
  location: "New York",
};

// console.log(describeNight(night));
console.log(describeNight(nightWithDescription));

interface Track {
  title: string;
  artist: string;
  duration: number; // in seconds
}

interface NightPlayer {
  play(track: Track): void;
  getQueueLength(): number;
}

interface NightPlayerWithQueue extends NightPlayer {
  queue: Track[];
}

class NightPlayerImpl implements NightPlayerWithQueue {
  queue: Track[] = [];

  play(track: Track): void {
    console.log(`Playing track: ${track.title} by ${track.artist}`);
    this.queue.push(track);
  }

  getQueueLength(): number {
    return this.queue.length;
  }
}

const player = new NightPlayerImpl();
player.play({ title: "Song 1", artist: "Artist A", duration: 180 });
player.play({ title: "Song 2", artist: "Artist B", duration: 200 });
