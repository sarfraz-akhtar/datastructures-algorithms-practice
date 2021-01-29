var arr = [
  {
    id: 3,
    sourceAccount: 'A',
    targetAccount: 'B',
    amount: 100,
    category: 'eating_out',
    time: '2018-03-02T10:34:30.000Z'
  },
  {
    id: 1,
    sourceAccount: 'A',
    targetAccount: 'B',
    amount: 100,
    category: 'eating_out',
    time: '2018-03-02T10:33:00.000Z'
  },
  {
    id: 6,
    sourceAccount: 'A',
    targetAccount: 'C',
    amount: 250,
    category: 'other',
    time: '2018-03-02T10:33:05.000Z'
  },
  {
    id: 4,
    sourceAccount: 'A',
    targetAccount: 'B',
    amount: 100,
    category: 'eating_out',
    time: '2018-03-02T10:36:00.000Z'
  },
  {
    id: 2,
    sourceAccount: 'A',
    targetAccount: 'B',
    amount: 100,
    category: 'eating_out',
    time: '2018-03-02T10:33:50.000Z'
  },
  {
    id: 5,
    sourceAccount: 'A',
    targetAccount: 'C',
    amount: 250,
    category: 'other',
    time: '2018-03-02T10:33:00.000Z'
  }
];
var duplicates = [];
var filteredArr = arr.reduce((acc, current) => {
  const x = acc.find(item => {
        const currentTime = new Date(current.time);
        const itemTime = new Date(item.time);
        const timeDiff = Math.abs(currentTime.valueOf() - itemTime.valueOf());
        const MAx_DUPLICATE_TIME = 60*1000;
        console.log(currentTime.toLocaleString(), itemTime.toLocaleString(), timeDiff)
   if((item.sourceAccount === current.sourceAccount && item.targetAccount === current.targetAccount && item.amount === current.amount && timeDiff < MAx_DUPLICATE_TIME)){
       duplicates.push(item);
        duplicates.push(current);
   }

});
  if (!x) {
    return acc.concat([current]);
  } else {
    return acc;
  }
}, []);

console.log(arr.length, filteredArr.length);
console.log(filteredArr);