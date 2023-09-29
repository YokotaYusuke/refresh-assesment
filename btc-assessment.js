"use strict";

function test(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("Yay! Test PASSED!");
  } else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd("Result:");
  }
}

// 1.old

// function feed(animal, foodObj) {
//   if((animal === "dog" && foodObj["taste"] === "beef") || (animal === "cat" && foodObj["taste"] === "tuna")) {
//     return "I love it!"
//   } else {
//     return "I don't like it!";
//   }
// }

// 1.new

function feed(type, foodObj) {
  if(type === "dog" && foodObj["custom"] === "dog food" && foodObj["taste"] === "beef") {
    return "I love it!";
  } else if(type === "cat" && foodObj["custom"] === "cat food" && foodObj["taste"] === "tuna") {
    return "I love it!";
  } else {
    return "I don't like it!";
  }
}


// test(feed("dog", { custom: "dog food", taste: "beef" }), "I love it!"); // "I love it!"
// test(feed("dog", { custom: "dog food", taste: "chicken" }), "I don't like it!"); // "I don't like it!"
// test(feed("dog", { custom: "cat food", taste: "chicken" }), "I don't like it!"); // "I don't like it!"

// test(feed("cat", { custom: "cat food", taste: "tuna" }), "I love it!"); // "I love it!"
// test(feed("cat", { custom: "cat food", taste: "chicken" }), "I don't like it!"); // "I don't like it!"
// test(feed("cat", { custom: "dog food", taste: "beef" }), "I don't like it!"); // "I don't like it!"



// 2

function reverse(arr) {
  return arr.map(x => x).reverse();
}

// test(reverse([1, 2, 3]), [3, 2, 1]);
// test(reverse([{ name: "mike", isCat: true }, true, "hello!"]), [ "hello!", true, { name: "mike", isCat: true }]);



// 3

function calculateTotalWithTax(priceObj, itemObj) {
  return Object.entries(priceObj).reduce((a,[key,value]) => a + Math.floor(value * itemObj[key] * 1.1),0);
}

const priceList = {
  apple: 150,
  banana: 190,
  grape: 2000,
  orange: 300,
};

const shoppingCart = {
  apple: 3,
  banana: 1,
  grape: 3,
  orange: 5,
};

// test(calculateTotalWithTax(priceList, shoppingCart), 8954);



// 4

function totalBookSales(arr) {
  return arr.map(x => x["price"] * x["sales"]);
}



// test(totalBookSales([
//   {
//     id: 1,
//     name: "JavaScript の基礎を復習する本",
//     price: 2800,
//     stock: 3,
//     sales: 10,
//   },
//   { id: 2, name: "JavaScript の配列", price: 3200, stock: 2, sales: 5 },
//   { id: 3, name: "DOM を極める", price: 3800, stock: 5, sales: 15 },
//   { id: 4, name: "高階関数の基本", price: 4200, stock: 1, sales: 20 },
//   { id: 5, name: "DIG BTC の心構え", price: 2680, stock: 4, sales: 10 },
// ]), [28000, 16000, 57000, 84000, 26800]);




// 5

function getValuesByProperty(obj, key) {
  return obj.reduce((a,b) => {
    a.push(b[key]);
    return a;
  },[]);
}



const objects = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 },
];

const property = "name";

// test(getValuesByProperty(objects, property), ["Alice", "Bob", "Charlie"]);


// 6.old

// function mergeAndSumObjects(...arr) {
//   const result = [];
//   const idArr = [];

//   const arr2 = arr.reduce((a,b) => {
//     for(const ele of b) {
//       a.push(ele);
//     }
//     return a;
//   },[]);

//   arr2.forEach(x => {
//     if(idArr.indexOf(x["id"]) === -1) {
//       result.push(x);
//       idArr.push(x["id"])
//     } else {
//       result[idArr.indexOf(x["id"])]["x"] += x["x"];
//       result[idArr.indexOf(x["id"])]["y"] += x["y"];
//     }
//   },[]);

//   return result;
// }



// 6.new


function mergeAndSumObjects(...arrays) {
  const arr = [];
  
  return arrays.reduce((a, elements) => {
    for(const el of elements) {
      if(arr.indexOf(el["id"]) === -1) {
        a.push(el);
        arr.push(el["id"]);
      } else {
        console.log(a)
         a[arr.indexOf(el["id"])]["x"] += (el["x"] || 0);
         a[arr.indexOf(el["id"])]["y"] += (el["y"] || 0);
      }
    }
    return a;
  },[]);
}



// const arr1 = [
//   { id: 1, x: 1, y: 3 },
//   { id: 2, x: 3, y: 5 },
// ];
// const arr2 = [{ id: 3, x: 2, y: 2 }];

// test(mergeAndSumObjects(arr1, arr2), [{ id: 1, x: 1, y: 3 },{ id: 2, x: 3, y: 5 },{ id: 3, x: 2, y: 2 }]);

// const arr3 = [{ id: 2, x: 3, y: 4 }];

// test(mergeAndSumObjects(arr1, arr2, arr3), [{ id: 1, x: 1, y: 3 },{ id: 2, x: 6, y: 9 },{ id: 3, x: 2, y: 2 }]);

// const arr4 = [{ id: 2, y: 4 }];

// test(mergeAndSumObjects(arr1, arr2, arr4), [{ id: 1, x: 1, y: 3 },{ id: 2, x: 6, y: 13 },{ id: 3, x: 2, y: 2 }]);





// 7.old

// function doTheThing(arr, exp1, exp2, exp3) {
//   return arr.map(x => exp1(x)).filter(y => exp2(y) && exp3(y));
// }

// 7.new

// function doTheThing(arr, exp1, exp2, exp3) {
//   return arr.map(exp1).filter(exp2).filter(exp3);
// }


// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// test(doTheThing(
//   numbers,
//   (n) => n * 3,
//   (n) => n % 2 === 0,
//   (n) => n > 20
// ),[24, 30]); 


// 8

function createMessages(greeting, obj) {
  return function(str) {
    return [obj["start"], greeting, str, obj["end"]].join(" ".repeat(obj["space"]));
  }
}


// let greeting = createMessages("Hello", { start: "😄", end: "♪", space: 1 });
// test(greeting("DIG"), "😄 Hello DIG ♪"); // "😄 Hello DIG ♪"

// greeting = createMessages("Domo!", { start: "🦈", end: "🦈", space: 2 });
// test(greeting("Same Desu!"), "🦈  Domo!  Same Desu!  🦈"); // "🦈  Domo!  Same Desu!  🦈"


// 10

function getDiffDate(date1, date2) {
  const startDate = new Date(date1);
  const endDate = new Date(date2);

  const diffDate = endDate - startDate;
  return diffDate < 0 ? -diffDate / (1000 * 60 * 60 * 24) : diffDate / (1000 * 60 * 60 * 24);
}


// test(getDiffDate("2019/01/01", "2019/01/02"), 1); // 1
// test(getDiffDate("2019/01/01", "2019/01/01"), 0); // 0
// test(getDiffDate("2019/01/01", "2019/02/01"), 31); // 31
// test(getDiffDate("2019/01/01", "2020/01/01"), 365); // 365


// 11

function createCounter(num, x) {
  let count = 0;

  return () => {
    if(count === 0) {
      count++;
      return num;
    } else {
      num += (x || 1);
      return num;
    } 
  }
}


const countDownFromOneHundred = createCounter(100, -5);
const countUpFromTen = createCounter(10);

test(countDownFromOneHundred(), 100); // 100
test(countUpFromTen(), 10); // 10
test(countUpFromTen(), 11); // 11
test(countDownFromOneHundred(), 95); // 95






function endsWith(str, searchStr, endIndex) {
  let countLen = 0;

  for(let [i,j] = [(endIndex-1 || str.length-1), searchStr.length-1]; j >= 0; [i--, j--]) {
    if([...str][i] === [...searchStr][j]) countLen++;
  }
  return searchStr.length === countLen;
}


function findExtremeValue(obj, size) {
  let arr = obj;
  if(Array.isArray(obj) === false) arr = Object.values(obj);

  if(size === "MAX") {
    return arr.sort((a, b) => b - a)[0];
  } else if (size === "MIN") {
    return arr.sort((a, b) => a - b)[0];
  }
}

const drinkStock = [
  { name: "cola", price: 120 },
  { name: "water", price: 100 },
  { name: "tea", price: 150 },
];

const vendingMachine = {
  money: 0,
  totalMoney: 1000,
  insertMoney(x) {
    if(x > 0) {
      vendingMachine["money"] += x;
      vendingMachine["totalMoney"] += x;
    } else {
      return "お金を投入してください";
    }
  },
  selectDrink(x) {
    if((x || -1) < 0) {
      return "お金が足りません";
    }
    let tmpMoney = vendingMachine["money"];
    for(const obj of drinkStock) {
      if(obj["name"] === x) {
        tmpMoney -= obj["price"];
      };
    }
    if(tmpMoney >= 0) {
      vendingMachine["money"] = tmpMoney;
      return `${x} が出てきました！`;
    } else {
      return "お金が足りません";
    }
  },
  returnChange() {
    let tmpMoney = vendingMachine["money"];
    vendingMachine["totalMoney"] -= vendingMachine["money"];
    vendingMachine["money"] = 0;
    return tmpMoney;
  }
}


// vendingMachine.insertMoney(500);

// test(vendingMachine.money, 500); // 500
// test(vendingMachine.totalMoney, 1500); // 1500
// test(vendingMachine.selectDrink("water"), "water が出てきました！"); // water が出てきました！
// test(vendingMachine.returnChange(), 400); // 400
// test(vendingMachine.money, 0); // 0
// test(vendingMachine.totalMoney, 1100); // 1100

// vendingMachine.insertMoney(100);
// test(vendingMachine.selectDrink("cola"), "お金が足りません"); // お金が足りません
// test(vendingMachine.insertMoney(), "お金を投入してください"); // お金を投入してください
// test(vendingMachine.insertMoney(-100), "お金を投入してください"); // お金を投入してください


function compare(value1, value2) {
  if(typeof value1 !== typeof value2) return false;

  switch (typeof value1) {
    case "string":
      if(value1 !== value2) return false;

    case "number":
      if(value1 !== value2) return false;

    case "object":
      if(value1.length !== undefined) {
        let count = value1.length;
        if(value1.length < value2.length) count = value2.length;
        for(let i = 0; i < count; i++) {
          if(value1[i] !== value2[i]) return false;
        }
      } else {
        for(const prop1 in value1) {
          if(typeof value1[prop1] !== "object" && value1[prop1] !== value2[prop1]) return false;
          if(typeof value1[prop1] === "object") {
            for(const prop2 in value1[prop1]) {
              if(typeof value1[prop1][prop2] !== "object" && value1[prop1][prop2] !== value2[prop1][prop2]) return false;
              if(typeof value1[prop1][prop2] === "object") {
                for(const prop3 in value1[prop1][prop2]) {
                  if(typeof value1[prop1][prop2][prop3] !== "object" && value1[prop1][prop2][prop3] !== value2[prop1][prop2][prop3]) return false;
                  if(typeof value1[prop1][prop2][prop3] === "object") {
                    for(const prop4 in value1[prop1][prop2][prop3]) {
                      if(typeof value1[prop1][prop2][prop3][prop4] !== "object" && value1[prop1][prop2][prop3][prop4] !== value2[prop1][prop2][prop3][prop4]) return false;
                    }
                  }
                }
              }
            }
          }
        }

        for(const prop1 in value2) {
          if(typeof value2[prop1] !== "object" && value2[prop1] !== value1[prop1]) return false;
          if(typeof value2[prop1] === "object") {
            for(const prop2 in value2[prop1]) {
              if(typeof value2[prop1][prop2] !== "object" && value2[prop1][prop2] !== value1[prop1][prop2]) return false;
              if(typeof value2[prop1][prop2] === "object") {
                for(const prop3 in value2[prop1][prop2]) {
                  if(typeof value2[prop1][prop2][prop3] !== "object" && value2[prop1][prop2][prop3] !== value1[prop1][prop2][prop3]) return false;
                  if(typeof value2[prop1][prop2][prop3] === "object") {
                    for(const prop4 in value2[prop1][prop2][prop3]) {
                      if(typeof value2[prop1][prop2][prop3][prop4] !== "object" && value2[prop1][prop2][prop3][prop4] !== value1[prop1][prop2][prop3][prop4]) return false;
                    }
                  }
                }
              }
            }
          }
        }
      }
  }

  return true;
}



const store = furnitureStore();

const tmcAccount = {
  id: 1,
  name: "TMC",
  emailAddress: "tmc@email-service.com",
  idAdmin: false,
};
const digAccount = {
  id: 2,
  name: "DIG",
  emailAddress: "dig@email-service.com",
  idAdmin: false,
};
const adminAccount = {
  id: 3,
  name: "ADMIN",
  emailAddress: "admin@email-service.com",
  idAdmin: true,
};


function furnitureStore() {
  const userLists = [];
  const itemLists = [];

  return function(action, account, item) {
    const userIdLists = userLists.map(x => x["id"]);
    const itemIdLists = itemLists.map(x => x["id"]);

    switch(action) {
      case "CREATE_ACCOUNT":
        if(userIdLists.indexOf(account["id"]) === -1) {
          userLists.push(account);
          return true;
        } else {
          return false;
        }

      case "CREATE_ITEM":
        if(account["name"] === "ADMIN" && itemIdLists.indexOf(item["id"]) === -1) {
          itemLists.push(item);
          return true;
        } else {
          return false;
        }

      case "GET_ITEM":
        if(itemIdLists.indexOf(item["id"]) !== -1) {
          return itemLists[itemIdLists.indexOf(item["id"])];
        } else {
          return false;
        }

      case "GET_ITEM_BY_CATEGORY":
        return itemLists.filter(x => x["category"] === item["category"]);

      case "GET_ITEM_BY_PRICE":
        if(item["condition"] === "or less") {
          return itemLists.filter(x => x["price"] <= item["price"]);
        } else if (item["condition"] === "or more") {
          return itemLists.filter(x => x["price"] >= item["price"]);
        }

      case "GET_ITEM_BY_STOCK":
        if(item["condition"] === "or less") {
          return itemLists.filter(x => x["stock"] <= item["stock"]);
        } else if (item["condition"] === "or more") {
          return itemLists.filter(x => x["stock"] >= item["stock"]);
        }

      case "GET_ITEM_BY_NAME":
        return itemLists.filter(x => x["name"] === item["name"]);

      case "DELETE_ITEM":
        if(account["name"] === "ADMIN" && itemIdLists.indexOf(item["id"]) !== -1) {
          itemLists.splice(itemIdLists.indexOf(item["id"]),1);
          return true;
        } else {
          return false;
        }
    } 
  }
}

// --------------------------------------------------

// test(store("CREATE_ACCOUNT", tmcAccount), true); // true
// test(store("CREATE_ACCOUNT", digAccount), true); // true
// test(store("CREATE_ACCOUNT", adminAccount), true); // true
// test(store("CREATE_ACCOUNT", tmcAccount), false); // false（同じアカウントは存在できない）

// // --------------------------------------------------

// test(store("CREATE_ITEM", adminAccount, {
//   id: 1,
//   name: "desk chair",
//   category: "chair",
//   stock: 100,
//   price: 3000,
// }),true); // true
// test(store("CREATE_ITEM", adminAccount, {
//   id: 2,
//   name: "very good desk",
//   category: "desk",
//   stock: 50,
//   price: 50000,
// }),true); // true
// test(store("CREATE_ITEM", adminAccount, {
//   id: 3,
//   name: "awesome desk",
//   category: "desk",
//   stock: 0,
//   price: 100000,
// }),true); // true
// test(store("CREATE_ITEM", adminAccount, {
//   id: 4,
//   name: "good bed",
//   category: "bed",
//   stock: 20,
//   price: 30000,
// }),true); // true
// test(store("CREATE_ITEM", adminAccount, {
//   id: 4,
//   name: "bookcase",
//   category: "storage",
//   stock: 50,
//   price: 5000,
// }),false); // false（既に存在するIDでの作成はできない）
// test(store("CREATE_ITEM", adminAccount, {
//   id: 5,
//   name: "bookcase",
//   category: "storage",
//   stock: 50,
//   price: 5000,
// }),true); // true
// test(store("CREATE_ITEM", digAccount, {
//   name: "awesome chair",
//   category: "chair",
//   stock: 100,
//   price: 100000,
// }),false); // false（管理者以外は実行できない）

// // --------------------------------------------------

// test(store("GET_ITEM", tmcAccount, { id: 1 }),
// {
// id: 1,
// name: "desk chair",
// category: "chair",
// stock: 100,
// price: 3000
// });
// test(store("GET_ITEM", tmcAccount, { id: 2 }),
// {
// id: 2,
// name: "very good desk",
// category: "desk",
// stock: 50,
// price: 50000
// });
// test(store("GET_ITEM", tmcAccount, { id: 1000 }),false); // false（商品が存在しない）

// // --------------------------------------------------

// test(store("GET_ITEM_BY_CATEGORY", tmcAccount, { category: "desk" }),
// [
// {
// id: 2,
// name: "very good desk",
// category: "desk",
// stock: 50,
// price: 50000
// },
// {
// id: 3,
// name: "awesome desk",
// category: "desk",
// stock: 0,
// price: 100000
// }
// ]);
// test(store("GET_ITEM_BY_CATEGORY", tmcAccount, { category: "chair" }),
// [
// {
// id: 1,
// name: "desk chair",
// category: "chair",
// stock: 100,
// price: 3000
// }
// ]);

// // --------------------------------------------------

// test(store("GET_ITEM_BY_PRICE", digAccount, {
//   price: 50000,
//   condition: "or less",
// }),
// [
// {
// id: 1,
// name: "desk chair",
// category: "chair",
// stock: 100,
// price: 3000
// },
// {
//   id: 2,
//   name: 'very good desk',
//   category: 'desk',
//   stock: 50,
//   price: 50000,
// },
// {
// id: 4,
// name: "good bed",
// category: "bed",
// stock: 20,
// price: 30000
// },
// {
// id: 5,
// name: "bookcase",
// category: "storage",
// stock: 50,
// price: 5000
// }
// ]);

// test(store("GET_ITEM_BY_PRICE", digAccount, {
//   price: 50000,
//   condition: "or more",
// }),
// [
// {
// id: 2,
// name: "very good desk",
// category: "desk",
// stock: 50,
// price: 50000
// },
// {
// id: 3,
// name: "awesome desk",
// category: "desk",
// stock: 0,
// price: 100000
// }
// ]);

// // --------------------------------------------------

// test(store("GET_ITEM_BY_STOCK", digAccount, { stock: 1, condition: "or more" }),
// [
//   { id: 1, name: "desk chair", category: "chair", stock: 100, price: 3000 },
//   { id: 2, name: "very good desk", category: "desk", stock: 50, price: 50000 },
//   { id: 4, name: "good bed", category: "bed", stock: 20, price: 30000 },
//   { id: 5, name: "bookcase", category: "storage", stock: 50, price: 5000 },
// ]);

// // --------------------------------------------------

// test(store("GET_ITEM_BY_NAME", digAccount, { name: "desk chair" }),
// [
//   { id: 1, name: "desk chair", category: "chair", stock: 100, price: 3000 },
// ]);

// // --------------------------------------------------

// test(store("DELETE_ITEM", adminAccount, { id: 1 }), true); // true
// test(store("DELETE_ITEM", adminAccount, { id: 6 }), false); // false（アイテムが見当たらない場合）
// test(store("DELETE_ITEM", tmcAccount, { id: 2 }), false); // false（管理者以外は実行できない）


// module.exports = {
//   feed,
//   reverse,
//   calculateTotalWithTax,
//   totalBookSales,
//   getValuesByProperty,
//   mergeAndSumObjects,
//   doTheThing,
//   createMessages,
//   getDiffDate,
//   createCounter,
//   endsWith,
//   findExtremeValue,
//   vendingMachine,
//   compare,
//   furnitureStore,
// };











