// code your solution here
const record = [
  { year: "2015", result: "W" },
  { year: "2014", result: "N/A" },
  { year: "2013", result: "L" },
  //...
];

function superbowlWin(record) {
  // Find the first object where result is "W" (win)
  const winObject = record.find((obj) => obj.result === "W");

  // If a winObject is found, return the year, else return undefined
  return winObject ? winObject.year : undefined;
}

console.log(superbowlWin(record)); // Output: '2015'
