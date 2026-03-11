function bookingUrl(destination: string, checkin: string, checkout: string): string {
  const aid = process.env.BOOKING_COM_AFFILIATE_ID ?? "";
  const params = new URLSearchParams({
    ss: destination,
    checkin,
    checkout,
    aid,
  });
  return `https://www.booking.com/searchresults.html?${params}`;
}

function viatorUrl(activity: string, destination: string): string {
  const pid = process.env.VIATOR_AFFILIATE_ID ?? "";
  const params = new URLSearchParams({
    text: `${activity} ${destination}`,
    pid,
  });
  return `https://www.viator.com/search?${params}`;
}

function klookUrl(query: string, destination: string): string {
  const aid = process.env.KLOOK_AFFILIATE_ID ?? "";
  const params = new URLSearchParams({
    query: `${query} ${destination}`,
    aid,
  });
  return `https://www.klook.com/search?${params}`;
}

function skyscannerUrl(origin: string, destination: string, date: string): string {
  const associateId = process.env.SKYSCANNER_AFFILIATE_ID ?? "";
  const params = new URLSearchParams({
    origin,
    destination,
    outboundDate: date,
    associateId,
  });
  return `https://www.skyscanner.com/transport/flights/${origin}/${destination}/?${params}`;
}

function opentableUrl(restaurant: string, destination: string): string {
  const rid = process.env.OPENTABLE_AFFILIATE_ID ?? "";
  const params = new URLSearchParams({
    term: `${restaurant} ${destination}`,
    rid,
  });
  return `https://www.opentable.com/s?${params}`;
}

export const affiliates = {
  booking: bookingUrl,
  viator: viatorUrl,
  klook: klookUrl,
  skyscanner: skyscannerUrl,
  opentable: opentableUrl,
} as const;
