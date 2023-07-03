import * as fs from "fs";
import * as rd from "readline";

var reader = rd.createInterface(fs.createReadStream("./data/cc.txt", "utf8"));

var topCal: number = 0;
var sum: number = 0;
var data: Array<number> = [];
var topElves: Array<number> = [];

reader.on("line", (l: string) => {
  data.push(parseInt(l));
});

function compareNumbers(a: number, b: number) {
  return b - a;
}

reader.on("close", () => {
  data.forEach((element) => {
    if (element) {
      sum += element;
      if (sum > topCal) {
        topCal = sum;
        console.log(`new leader! ${topCal}`);
      }
    } else {
      console.log(`Elf has ${sum} calories`);
      topElves.push(sum);
      sum = 0;
    }
  });
  let totalCals: number = 0;
  totalCals = topElves
    .sort(compareNumbers)
    .slice(0, 3)
    .reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      totalCals
    );

  console.log(
    `TopCals ${topCal}, TocalCals ${totalCals}, Top Elf #1 ${topElves[0]} #2 ${topElves[1]} #3 ${topElves[2]}`
  );
});
