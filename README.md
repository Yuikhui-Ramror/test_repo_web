# Trust Rides

Multi-service website for Trust Rides — a car, bike and scooter rental business based in Guwahati, Assam.

## Pages

| File | Service | Purpose |
|---|---|---|
| `index.html` | Trust Rides (main) | Service-selection landing page |
| `guwahati.html` | Trust Rides Guwahati | Existing local rentals (cars, bike, scooter) |
| `tours.html` | Trust Rides Tours & Travels | Outstation rentals across Northeast India |

All navigation uses relative links, so the site works from any folder or host with no build step.

## Structure

```
Trust_Rides_Backup/
├── index.html               Landing page (choose a service)
├── guwahati.html            Local rentals page (preserved from v1)
├── tours.html               Outstation rentals page (new)
├── favicon.svg
├── css/
│   ├── base.css             Shared foundation: tokens, header, buttons, footer
│   ├── main.css             Landing page only
│   ├── guwahati.css         Guwahati page only (original stylesheet, untouched design)
│   └── tours.css            Tours & Travels page only
├── js/
│   ├── main.js              Landing page reveals + header shadow
│   ├── guwahati.js          Original Guwahati behaviour (menu, scroll, lightbox)
│   └── tours.js             Tours page navigation + reveals
└── images/
    ├── local/               Existing Guwahati vehicle photographs (unchanged files)
    └── outstation/          Reserved for supplied Tours & Travels photographs
```

## Running locally

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
```

Then visit <http://localhost:8000/>.

## Tours & Travels content status

Supplied and in place:

- Vehicle photographs for the **Hyundai Venue** (`Venue-2.jpeg`) and **Ford Aspire**
  (`aspire-5.jpeg`) — see `images/outstation/README.md`.
- Vehicle names and body types on the fleet cards.

Still to be supplied:

- Outstation daily rental rates (currently shown as "Daily rate on request").
- Any additional specifications, availability rules or outstation policies.
- Optional: more vehicles, and galleries for the extra supplied photos.

## Bookings

All booking and enquiry buttons open WhatsApp on **+91 87876 86454** with pre-filled messages.
The Guwahati page keeps its vehicle-specific messages. No backend or database is used.
