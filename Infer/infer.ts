// infer is one of the coolest “advanced TypeScript” features
// because it lets TS extract types from inside other types
// and perform pattern matching on the shape of types at compile time.

type ApiResponse<T> = {
  data: T;
  status: number;
};

type ExtractData<T> = T extends ApiResponse<infer R> ? R : never;

type D1 = ExtractData<ApiResponse<{ id: number }>>;

//easy

type IsNumber<T> = T extends number ? "yes" : "no";

type A = IsNumber<number>; // "yes"
type B = IsNumber<string>; // "no"

//    Key Takeaways:
//    - infer captures a type variable from inside a structure
//    - Useful for: function types, promises, arrays, DTOs, APIs
//    - Enables pattern matching at type-level
//    - Core to many advanced TS libraries (TRPC, Prisma, Zod)
// ------------------------------------------------------- */
