/*Type narrowing means reducing a broad type (like a union) to a more specific one so you can safely use properties or methods of that type.

*/

function printValue(value: string | number) {
  if (typeof value === "string") {
    // value is now narrowed to string
    console.log(value.toUpperCase());
  } else {
    // value is now narrowed to number
    console.log(value.toFixed(2));
  }
}
