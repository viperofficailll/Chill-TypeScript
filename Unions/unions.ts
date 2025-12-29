/*number | string → id can be either a number or a string
Any other type is not allowed */

let id: number | string;

id = 101;
id = "A102";
// id = true; ❌ Error

let ApiResponse: "Pending" | "Success" | "Error";
ApiResponse = "Success";
//ApiResponse = 10  // this one gives error//
