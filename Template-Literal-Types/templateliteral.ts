type Vertical = "top" | "bottom";
type Horizontal = "left" | "right";

type Alignment = `${Vertical}-${Horizontal}`;


// Alignment is now: "top-left" | "top-right" | "bottom-left" | "bottom-right"
type Entity = "user" | "post" | "comment";
type Action = "get" | "delete" | "update";



// We create a strict type for our URL paths
type ApiRoute = `/api/${Entity}/${Action}`;

function callApi(route: ApiRoute) {
    // implementation...
}

callApi("/api/user/get");    // Works
// callApi("/api/admin/reset"); // Error: Argument of type '"/api/admin/reset"' is not assignable
