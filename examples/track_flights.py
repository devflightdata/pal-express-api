# PAL Express (2P) - live flights via the AirLabs API.
import requests

API_KEY = "YOUR_API_KEY"
BASE = "https://airlabs.co/api/v9"

def live_flights(airline_iata="2P"):
    r = requests.get(f"{BASE}/flights", params={"airline_iata": airline_iata, "api_key": API_KEY})
    return r.json().get("response", [])

if __name__ == "__main__":
    flights = live_flights()
    print(f"count: {len(flights)}")
    for f in flights:
        ident = f.get("flight_iata") or f.get("flight_icao") or f.get("reg_number") or "?"
        print(f"{ident:8} {f.get('dep_iata','?')}->{f.get('arr_iata','?')} {f.get('status','')}")
