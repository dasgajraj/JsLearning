// ======================= DATES IN JS =======================
console.log('======= DATES IN JS =======');

// Creating a date using current timestamp
const date = new Date();

console.log("Full Date (toString):", date.toString()); // Human-readable string
console.log("Date in JSON format:", date.toJSON());    // ISO format string
console.log("Locale string:", date.toLocaleString());  // Local date and time
console.log("Locale time:", date.toLocaleTimeString()); // Only time
console.log("Locale date:", date.toLocaleDateString()); // Only date
console.log("Type of date object:", typeof date);       // object

// ======================= CUSTOM DATES =======================

// Creating a custom date: Jan 23, 2025 (month is 0-indexed)
const customDate = new Date(2025, 0, 23);
console.log("Custom date (raw):", customDate);
console.log("Custom date (string):", customDate.toString());
console.log("Custom date (locale):", customDate.toLocaleString());

// Custom date with time: Jan 23, 2025 at 12:12:12
const customDateWithTime = new Date(2025, 0, 23, 12, 12, 12);
console.log("Custom date with time (raw):", customDateWithTime);
console.log("Custom date with time (string):", customDateWithTime.toString());
console.log("Custom date with time (locale):", customDateWithTime.toLocaleString());

// ======================= STRING TO DATE =======================

// Creating a date from a string: MM-DD-YYYY HH:mm:ss
let createdDate = new Date("10-07-2025 23:12:56");
console.log("Date from string:", createdDate.toLocaleString());

// ======================= TIMESTAMP =======================

// Getting current timestamp in milliseconds
let timeSnapshot = Date.now();
console.log("Timestamp (ms since Jan 1, 1970):", timeSnapshot);

// Converting timestamp to seconds (Unix timestamp)
console.log("Timestamp in seconds:", Math.floor(timeSnapshot / 1000));

// ======================= DATE COMPONENTS =======================

let newDate = new Date();
console.log("Current local datetime:", newDate.toLocaleString());

// Get specific parts of the date
console.log("Date (day of month):", newDate.getDate());      // Day of the month (1–31)
console.log("Day of week (0-Sun, 6-Sat):", newDate.getDay()); // Day of week
console.log("Month (0-Jan, 11-Dec):", newDate.getMonth());   // Month (0-indexed)
console.log("Year:", newDate.getFullYear());                 // Full year (e.g. 2025)

// ======================= LOCALIZED FORMATTING =======================

// Get weekday name in default locale
console.log("Weekday name:", newDate.toLocaleString('default', {
    weekday: 'long',
}));
