// date String
function getDateValueOf(date){
  return new Date(date).valueOf();
}
function getBalanceByCategoryInPeriod (transactions = [], category, start, end) {
  // add your code here
  
return transactions.reduce((accumulator, transaction) => {
    console.log(console.log(transaction, accumulator));
 const transactionTimeValue = getDateValueOf(transaction.time);
 const startTimeValue = getDateValueOf(start);
 const endTimeValue = getDateValueOf(end); 


if((transaction.category === category && transactionTimeValue >= startTimeValue && transactionTimeValue < endTimeValue)){
  return accumulator + transaction.amount;
} else return accumulator;
    },0);

};

 getBalanceByCategoryInPeriod(
        [],
        "eating_in",
        new Date("2018-03-01"),
        new Date("2018-03-31")
      );