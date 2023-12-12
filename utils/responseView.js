const httpResponse = (code, message, output, res) => {
 //  console.log(code, message, output, res);
 if (res && message) {
  return res.status(code).json({ message: output });
 }

 if (res) {
  return res.status(code).json(output);
 }

 return output;
};

const consoleResponse = (message, output) => {
 if (message) {
//   console.log({ message: message, output: output });
  return;
 }
//  console.log({ output });
 return;
};

const responseType = (code, message, output, res, httpView) => {
 if (httpView) {
  return httpResponse(code, message, output, res);
 }

 return consoleResponse(message, output);
};

export { responseType };
