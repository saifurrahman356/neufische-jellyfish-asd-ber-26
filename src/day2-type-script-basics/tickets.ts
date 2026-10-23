type TicketTier = "standing" | "seated" | "vip";
type Seat = [string, number];
interface Ticket {
  readonly id: string;
  tier: TicketTier;
  seat?: Seat;
}

type VipTicket = Ticket & { loungeAccess: boolean };

function ticketPrice(tier: TicketTier): number {
  switch (tier) {
    case "standing":
      return 50;
    case "seated":
      return 80;
    case "vip":
      return 150;
  }
}

function describeSeat(seat: Seat): string {
  return `Row ${seat[0]}, seat ${seat[1]}`;
}

function parseQuantity(input: unknown): number {
  return typeof input === "number" ? input : 0;
}

const standingTicket: Ticket = {
  id: "T001",
  tier: "standing",
};

const seatedTicket: Ticket = {
  id: "T002",
  tier: "seated",
  seat: ["C", 12],
};

const vipTicket: VipTicket = {
  id: "T003",
  tier: "vip",
  seat: ["A", 5],
  loungeAccess: true,
};

const tickets: Ticket[] = [standingTicket, seatedTicket, vipTicket];

for (const ticket of tickets) {
  console.log(
    `Ticket ${ticket.id} (${ticket.tier}): €${ticketPrice(ticket.tier)}`,
  );

  if (ticket.seat) {
    console.log(describeSeat(ticket.seat));
  }
}

console.log(parseQuantity(10)); // 10
console.log(parseQuantity("25")); // 0
console.log(parseQuantity(JSON.parse("3"))); // 3
