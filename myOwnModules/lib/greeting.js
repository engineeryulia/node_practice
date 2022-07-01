//console.log('Hello from greeting  module');
module.exports.getMessage = (name, date) => {
  let hour = date.getHours();
  if (hour > 16) return 'Good evening,' + name;
  else if (hour > 10) return 'Good day,' + name;
  else return 'Good morning,' + name;
};
