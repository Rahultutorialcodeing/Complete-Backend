// console.log("Hello wrold")
// window.alert()
// document.write("Hello")
// var x = 10;
// var y = 12;
// var sum = x + y;
// console.log(sum);

// if (sum == 13) {
//   console.log("success");
// } else {
//   console.log("error");
// }

// const user = {
//   email: "demo@gmail.com",
//   password: 1234,
// };
// console.log(user);

// syncronius code jo
// console.log("one");
// console.log("two");
// console.log("three");

// asyncronius code
// console.log("one");
// setTimeout(()=>{
//     console.log("two");
// },3000)
// console.log("three");

// asyncronius code with Promise 
// dout hai oops ka concept hai 

function mycode() {
  return new Promise((resolve, reject) => {
    if (12 === 12) {
      resolve("My code is success");
    } else {
      reject("My code is failed");
    }
  });
}

mycode();
