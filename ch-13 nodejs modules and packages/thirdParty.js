const moment=require("moment")
const dt=moment();
console.log(dt)
console.log(dt.format('DD/MM/YYYY hh:mm:ss A'));
console.log(dt.add(2, "years").format("DD/MM/YYYY")) // ajj se after 2 year kon sa date aayega
