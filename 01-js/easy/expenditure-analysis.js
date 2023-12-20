/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
/*
// using map for iteration and get the return value , but return value will endup as array: its a hassle to check each obj property as element in an array.
// the return value is obj here
  let result = {};
transactions.map(seggregateFn);
function seggregateFn(obj){
  let {category, price} = obj; //destruturing obj
  if(!(category in result))
    result[category]= {category , totalSpent: price};
  else
    result[category].totalSpent +=price;
}
return Object.values(result);
*/
  const result = {}
  transactions.forEach(Obj =>{
    const {category, price} = Obj; // destructuring each object
    if(!(category in result))
      result[category]={category, totalSpent: price}; // category now structure itself a property opposite to desrtucture => name = "same"; let x ={name}>> x{name : "sam"}
    else
      result[category].totalSpent+= price;
  });
  return Object.values(result);
}

module.exports = calculateTotalSpentByCategory;
