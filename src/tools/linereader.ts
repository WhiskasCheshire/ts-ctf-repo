import * as readline from "readline"


export function setIOTo(app: Function) {

  // Input stream configuration
  const inputReader = readline.createInterface({
    input: process.stdin,
  });

  // Define what happens at every input line
  inputReader.on("line", (input: string) => {
    let event = JSON.parse(input);
    let result = app(event);
    let output = JSON.stringify(result);
    console.log(output);
  });


}
