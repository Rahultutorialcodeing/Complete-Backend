const type = { "content-type": "application/json" };
const getMessage = (message) => {
  return JSON.stringify({
    message: message,
  });
};

module.exports = {
  type,
  getMessage
};
