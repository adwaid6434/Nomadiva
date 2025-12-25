import { useState, useMemo } from "react";
import { useEffect } from "react";

/* =======================
   MOCK DESTINATIONS
======================= */

const TOURS = [
  {
    id: "beach",
    title: "Sunset Watching in Vaikom Beach",
    location: "vaikom, India",
    rating: 4.8,
    reviews: 312,
    basePrice: 1999,
    image: "/images/sunset.webp",
    times: ["06:00 AM", "04:30 PM", "05:30 PM"],
  },
  {
    id: "temple",
    title: "Mahadeva Temple Tour in Vaikom",
    location: "vaikom, India",
    rating: 4.8,
    reviews: 312,
    basePrice: 1899,
    image: "/images/temple2.png",
    times: ["06:00 AM", "04:30 PM", "05:30 PM"],
  },

  {
    id: "boating",
    title: "Boating in Vaikom",
    location: "vaikom, India",
    rating: 4.8,
    reviews: 312,
    basePrice: 3499,
    image: "/images/boat.png",
    times: ["06:00 AM", "04:30 PM", "05:30 PM"],
  },

  {
    id: "goa",
    title: "Sunset Kayaking in Goa",
    location: "Goa, India",
    rating: 4.8,
    reviews: 312,
    basePrice: 2499,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    times: ["06:00 AM", "04:30 PM", "05:30 PM"],
  },
  {
    id: "manali",
    title: "Taj Mahal in Agra",
    location: "Agra, Uttar Pradesh",
    rating: 4.7,
    reviews: 198,
    basePrice: 3499,
    image: "https://images.unsplash.com/photo-1548013146-72479768bada",
    times: ["07:00 AM", "08:00 AM"],
  },
  {
    id: "jaipur",
    title: "Royal Heritage Walk in Jaipur",
    location: "Jaipur, Rajasthan",
    rating: 4.6,
    reviews: 254,
    basePrice: 1999,
    image: "https://images.unsplash.com/photo-1602643163983-ed0babc39797",
    times: ["09:00 AM", "05:00 PM"],
  },
];

const PACKAGES = [
  { id: "solo", label: "Solo Experience", price: 0 },
  { id: "group", label: "Group Package (Save ₹500)", price: -500 },
];

const ADDONS = [
  { id: "guide", label: "Personal Guide", price: 999 },
  { id: "meal", label: "Local Meal Experience", price: 1499 },
  { id: "transport", label: "Hotel Pickup & Drop", price: 799 },
];

/* =======================
   MAIN PAGE
======================= */

export default function BookingPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [selectedTourId, setSelectedTourId] = useState("beach");
  const tour = TOURS.find((t) => t.id === selectedTourId) || TOURS[0];

  const [packageType, setPackageType] = useState("solo");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState({ adults: 1, children: 0 });
  const [addons, setAddons] = useState([]);

  const canBook = date && time && guests.adults > 0;

  const totalPrice = useMemo(() => {
    const packagePrice = PACKAGES.find((p) => p.id === packageType)?.price || 0;

    const addonsPrice = addons.reduce(
      (sum, id) => sum + (ADDONS.find((a) => a.id === id)?.price || 0),
      0
    );

    const guestMultiplier = guests.adults + guests.children * 0.5;

    return (tour.basePrice + packagePrice + addonsPrice) * guestMultiplier;
  }, [tour, packageType, addons, guests]);

  return (
    <div className="min-h-screen bg-slate-50">
      <Hero tour={tour} />

      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* LEFT */}
        <div className="lg:col-span-2 space-y-8">
          <DestinationSelector
            value={selectedTourId}
            onChange={(id) => {
              setSelectedTourId(id);
              setTime("");
            }}
          />
          <PackageSelector value={packageType} onChange={setPackageType} />
          <DatePicker value={date} onChange={setDate} />
          <TimeSelector value={time} onChange={setTime} times={tour.times} />
          <GuestSelector guests={guests} setGuests={setGuests} />
          <AddOns addons={addons} setAddons={setAddons} />
          <TrustSignals />
        </div>

        {/* RIGHT */}
        <StickySummary
          tour={tour}
          date={date}
          time={time}
          guests={guests}
          addons={addons}
          total={totalPrice}
          canBook={canBook}
        />
      </div>
    </div>
  );
}

/* =======================
   COMPONENTS
======================= */

function Hero({ tour }) {
  return (
    <div className="relative h-[60vh] rounded-b-3xl overflow-hidden">
      <img
        src={tour.image}
        alt={tour.title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 h-full flex items-end">
        <div className="p-8 text-white max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold">{tour.title}</h1>
          <p className="mt-2 opacity-90">{tour.location}</p>

          <div className="mt-4 flex flex-wrap items-center gap-4">
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
              ⭐ {tour.rating} ({tour.reviews} reviews)
            </span>
            <span className="text-2xl font-semibold">₹{tour.basePrice}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function DestinationSelector({ value, onChange }) {
  return (
    <Section title="Choose Destination">
      <div className="flex gap-4 overflow-x-auto pb-2">
        {TOURS.map((t) => (
          <button
            key={t.id}
            onClick={() => onChange(t.id)}
            className={`min-w-[260px] rounded-2xl border overflow-hidden transition
              ${
                value === t.id
                  ? "border-blue-600 shadow-md"
                  : "hover:border-slate-300"
              }`}
          >
            <img
              src={t.image}
              alt={t.title}
              className="h-32 w-full object-cover"
            />
            <div className="p-4 text-left">
              <p className="font-semibold">{t.title}</p>
              <p className="text-sm text-slate-600">{t.location}</p>
              <p className="text-sm mt-1">From ₹{t.basePrice}</p>
            </div>
          </button>
        ))}
      </div>
    </Section>
  );
}

function PackageSelector({ value, onChange }) {
  return (
    <Section title="Choose Package">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {PACKAGES.map((p) => (
          <button
            key={p.id}
            onClick={() => onChange(p.id)}
            className={`p-4 rounded-xl border text-left transition
              ${
                value === p.id
                  ? "border-blue-600 bg-blue-50"
                  : "hover:border-slate-300"
              }`}
          >
            <p className="font-semibold">{p.label}</p>
          </button>
        ))}
      </div>
    </Section>
  );
}

function DatePicker({ value, onChange }) {
  return (
    <Section title="Select Date">
      <input
        type="date"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border px-4 py-3"
      />
    </Section>
  );
}

function TimeSelector({ value, onChange, times }) {
  return (
    <Section title="Select Time">
      <div className="flex flex-wrap gap-3">
        {(times || []).map((t) => (
          <button
            key={t}
            onClick={() => onChange(t)}
            className={`px-4 py-2 rounded-full border transition
              ${
                value === t
                  ? "bg-blue-600 text-white"
                  : "hover:border-slate-300"
              }`}
          >
            {t}
          </button>
        ))}
      </div>
    </Section>
  );
}

function GuestSelector({ guests, setGuests }) {
  const update = (type, delta) =>
    setGuests((g) => ({
      ...g,
      [type]: Math.max(0, g[type] + delta),
    }));

  return (
    <Section title="Guests">
      <GuestRow
        label="Adults"
        count={guests.adults}
        onChange={(d) => update("adults", d)}
      />
      <GuestRow
        label="Children"
        count={guests.children}
        onChange={(d) => update("children", d)}
      />
    </Section>
  );
}

function GuestRow({ label, count, onChange }) {
  return (
    <div className="flex justify-between items-center py-2">
      <span>{label}</span>
      <div className="flex gap-3 items-center">
        <button
          onClick={() => onChange(-1)}
          className="px-3 py-1 border rounded"
        >
          -
        </button>
        <span>{count}</span>
        <button
          onClick={() => onChange(1)}
          className="px-3 py-1 border rounded"
        >
          +
        </button>
      </div>
    </div>
  );
}

function AddOns({ addons, setAddons }) {
  const toggle = (id) =>
    setAddons((a) => (a.includes(id) ? a.filter((x) => x !== id) : [...a, id]));

  return (
    <Section title="Add-ons">
      <div className="space-y-3">
        {ADDONS.map((a) => (
          <label
            key={a.id}
            className="flex justify-between items-center border rounded-xl p-4 cursor-pointer"
          >
            <span>
              {a.label} (₹{a.price})
            </span>
            <input
              type="checkbox"
              checked={addons.includes(a.id)}
              onChange={() => toggle(a.id)}
            />
          </label>
        ))}
      </div>
    </Section>
  );
}

function StickySummary({ tour, date, time, guests, addons, total, canBook }) {
  return (
    <div className="lg:sticky top-6 bg-white rounded-2xl shadow-lg p-6 space-y-4">
      <h3 className="text-xl font-semibold">{tour.title}</h3>
      <p className="text-sm text-slate-600">{tour.location}</p>

      <SummaryRow label="Date" value={date || "—"} />
      <SummaryRow label="Time" value={time || "—"} />
      <SummaryRow
        label="Guests"
        value={`${guests.adults} Adults, ${guests.children} Children`}
      />
      <SummaryRow label="Add-ons" value={addons.length || "None"} />

      <div className="border-t pt-4 flex justify-between font-semibold">
        <span>Total</span>
        <span>₹{Math.round(total)}</span>
      </div>

      <button
        disabled={!canBook}
        className={`w-full py-3 rounded-xl text-lg transition
          ${
            canBook
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "bg-slate-300 text-slate-600 cursor-not-allowed"
          }`}
      >
        Book Now
      </button>

      <p className="text-xs text-center text-slate-500">
        Free cancellation • Secure payment
      </p>
    </div>
  );
}

function SummaryRow({ label, value }) {
  return (
    <div className="flex justify-between text-sm">
      <span className="text-slate-600">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 space-y-4">
      <h2 className="text-lg font-semibold">{title}</h2>
      {children}
    </div>
  );
}

function TrustSignals() {
  return (
    <div className="bg-slate-100 rounded-xl p-4 text-sm text-slate-600">
      ✔ Free cancellation up to 24 hours before
      <br />
      ✔ Verified local experiences
      <br />✔ Secure & encrypted payments
    </div>
  );
}
