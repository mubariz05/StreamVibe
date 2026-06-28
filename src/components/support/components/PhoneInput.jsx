import { useState, useEffect, useRef } from "react";

const COUNTRIES = [
  { code: "AZ", dialCode: "+994", name: "Azerbaijan" },
  { code: "US", dialCode: "+1", name: "United States" },
  { code: "GB", dialCode: "+44", name: "United Kingdom" },
  { code: "DE", dialCode: "+49", name: "Germany" },
  { code: "TR", dialCode: "+90", name: "Turkey" },
  { code: "RU", dialCode: "+7", name: "Russia" },
];

const FlagImg = ({ code }) => (
  <img
    src={`https://flagcdn.com/24x18/${code.toLowerCase()}.png`}
    alt={code}
    width={12}
    height={9}
    style={{ borderRadius: "2px", objectFit: "cover", marginRight: "5px" }}
  />
);

export const PhoneInput = ({ value, onChange, error }) => {
  const [selected, setSelected] = useState(COUNTRIES[0]);
  const [open, setOpen] = useState(false);
  const [localValue, setLocalValue] = useState(value || "");
  const ref = useRef(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLocalValue(value || "");
  }, [value]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleCountrySelect = (country) => {
    setSelected(country);
    setOpen(false);
    // Yalnız seçilmiş ölkə kodunu saxlayın
    onChange(localValue, country.dialCode);
  };

  const handlePhoneChange = (e) => {
    const newValue = e.target.value;
    // Yalnız rəqəmləri saxlayın
    const numericValue = newValue.replace(/\D/g, "");

    // Maksimum 9 rəqəm məhdudiyyəti
    if (numericValue.length <= 9) {
      setLocalValue(numericValue);
      onChange(numericValue, selected.dialCode);
    }
  };

  return (
    <div className="form-group">
      <label>Phone Number</label>
      <div className={`phone-row ${error ? "input-error" : ""}`}>
        <div
          className="flag-select"
          ref={ref}
          onClick={() => setOpen((prev) => !prev)}
        >
          <FlagImg code={selected.code} />
          <span className="dial-code">{selected.dialCode}</span>
          <span className="arrow">{open ? "▴" : "▾"}</span>

          {open && (
            <ul className="country-dropdown">
              {COUNTRIES.map((c) => (
                <li
                  key={c.code}
                  className={`country-option ${c.code === selected.code ? "active" : ""}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCountrySelect(c);
                  }}
                >
                  <FlagImg code={c.code} />
                  <span>{c.name}</span>
                  <span className="dial-code">{c.dialCode}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <input
          type="tel"
          placeholder="Enter Phone Number"
          value={localValue}
          onChange={handlePhoneChange}
          maxLength={9}
        />
      </div>
      {error && <span className="error-text">{error}</span>}
    </div>
  );
};
