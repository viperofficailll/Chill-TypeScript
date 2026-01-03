function identity(value: any) {
  return value;
}

identity(10); // no type safety
identity("hello");

//with generics
function identity1<T>(value: T): T {
  return value;
}

identity1<number>(10);
identity1<string>("hello");

function printValue<T>(value: T): void {
  console.log(value);
}

printValue<number>(100);
printValue<string>("TypeScript");
printValue<boolean>(true);

//generic array functions

function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

getFirstElement<number>([1, 2, 3]);
getFirstElement<string>(["a", "b", "c"]);




//real world kind


type ApiResponse<T> = {
  status: number;
  message: string;
  data: T;
};

type Userindb = {
  id: string;
  email: string;
};

const response: ApiResponse<Userindb> = {
  status: 200,
  message: "Success",
  data: {
    id: "123",
    email: "test@gmail.com",
  },
};
