// find 1st, find Nth...
const tweetsArr = [
  "tweet 1", //tweetsArr[0] - O(1)
  "tweet 2",
  "tweet 3",
  "tweet 4",
  "tweet 5",
  "tweet 6",
  "tweet 7",
  "tweet 8",
  "tweet 9",
  "tweet 10", //tweetsArr[tweetsArr.length - 1] - O(1)
];

const tweetsArrObj = [
  { tweet: "tweet 1", date: 2010 }, //tweetsArr[0] - O(n^2) - comparing everything with every other thing ❌
  { tweet: "tweet 2", date: 2011 },
  { tweet: "tweet 3", date: 2012 },
  { tweet: "tweet 4", date: 2013 },
  { tweet: "tweet 5", date: 2014 },
  { tweet: "tweet 6", date: 2015 },
  { tweet: "tweet 7", date: 2016 },
  { tweet: "tweet 8", date: 2017 },
  { tweet: "tweet 9", date: 2018 },
  { tweet: "tweet 10", date: 2019 },
];

//Ex. What's the Big(0) of this :
const someStr = "rdfghyujkildtfyghjklrandombs".length;
//Answer: Depends totally on the programming language.. In JS it's O(1) //LookUp
