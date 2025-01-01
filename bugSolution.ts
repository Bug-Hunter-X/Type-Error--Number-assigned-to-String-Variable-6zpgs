function printString(str: string): void {
  console.log(str);
}

const myString: string = "123"; // Correct type assignment
printString(myString); 

//Alternative solution: Type assertion (use cautiously)
const myNumber: number = 123;
printString(myNumber as string); // This is less safe than the first solution.