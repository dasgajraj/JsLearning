// 1 to 4 video
const accountId = 1234567890;  // ✅ constant - cannot be reassigned
let accuontEmail = "das.study.das@gmail.com";  // 🔄 mutable, block scoped
var accountPassword = "132003";  // ⚠️ avoid using var (function scoped)
accuontCity = "Delhi";  // ❗implicit global variable (not recommended)
let accountState;  // ➖ declared but undefined

// accountId = 41127656533; ❌ Not allowed (const)

accuontEmail = "dasgajraj1@gmail.com";
accountPassword = "1234";
accuontCity = "Faridabad";  // updated
// accountState remains undefined

// 🔍 Individual logs
console.log("Account ID:", accountId);
console.log("Email:", accuontEmail);
console.log("Password:", accountPassword);
console.log("City:", accuontCity);
console.log("State:", accountState);

// 📋 View all in table format
console.table([accountId, accuontEmail, accountPassword, accuontCity, accountState]);

/*
📌 Notes:
- Prefer `let` and `const` over `var`
- `var` is function scoped (can leak scope)
- `let` and `const` are block scoped
- `const` must be initialized & cannot be reassigned
*/
