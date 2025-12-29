/* Type Infrence basically means TS will understand the type by itself */

let count = 10;
count = 20;
// count = "twenty";  ---- this throws error because ts understands that this needs to be a number
