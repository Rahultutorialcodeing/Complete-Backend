const getCurrentDateTime = (flag) => {
  const date = new Date();
  if (flag === "D") {
    return date.toLocaleDateString();
  } else if (flag === "T") {
    return date.toLocaleTimeString();
  } else {
    return "Flag notFound";
  }
};
module.exports = {
  getCurrentDateTime,
};
