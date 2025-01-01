function printString(str: string): void {
  console.log(str);
}

const myString: string = 123; // Type error: Type 'number' is not assignable to type 'string'.
printString(myString);