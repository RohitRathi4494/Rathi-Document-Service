const services = [
  "Rent Agreement",
  "Affidavit",
  "General Power of Attorney",
  "Special Power of Attorney",
  "Sale Deed",
  "Agreement to Sell",
  "Relinquishment Deed",
  "Will / Vasiyatnama",
  "Indemnity Bond",
  "NOC",
  "Court Affidavit",
  "Income Certificate Affidavit",
  "Lease Agreement",
];

const tickerItems = [...services, ...services]; // duplicate for seamless loop

export default function ServicesTicker() {
  return (
    <div
      style={{
        background: "#C9A84C",
        padding: "14px 0",
        overflow: "hidden",
      }}
      aria-label="Services offered"
      role="marquee"
    >
      <div className="marquee-container">
        <div className="marquee-track">
          {tickerItems.map((item, i) => (
            <span
              key={i}
              style={{
                display: "inline-flex",
                alignItems: "center",
                fontFamily: "var(--font-inter)",
                fontWeight: 700,
                fontSize: "0.875rem",
                letterSpacing: "0.04em",
                color: "#1B3A6B",
                textTransform: "uppercase",
                whiteSpace: "nowrap",
                paddingRight: "2.5rem",
              }}
            >
              {item}
              <span
                style={{
                  display: "inline-block",
                  width: 5,
                  height: 5,
                  borderRadius: "50%",
                  background: "#1B3A6B",
                  marginLeft: "2.5rem",
                  flexShrink: 0,
                }}
                aria-hidden="true"
              />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
