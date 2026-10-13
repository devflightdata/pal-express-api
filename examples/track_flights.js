// PAL Express (2P) - live flights via the AirLabs API.  Run: node track_flights.js  (Node 18+)
const API_KEY = "YOUR_API_KEY";
const BASE = "https://airlabs.co/api/v9";

async function liveFlights(airlineIata = "2P") {
  const res = await fetch(`${BASE}/flights?airline_iata=${airlineIata}&api_key=${API_KEY}`);
  const data = await res.json();
  return data.response || [];
}

liveFlights().then(flights => {
  console.log("count:", flights.length);
  flights.forEach(f => {
    const ident = f.flight_iata ?? f.flight_icao ?? f.reg_number ?? "?";
    console.log(`${ident}  ${f.dep_iata ?? "?"}->${f.arr_iata ?? "?"}  ${f.status ?? ""}`);
  });
});
