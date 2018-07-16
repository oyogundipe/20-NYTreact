// this will take in the params object we are passing from the page before and it will return the object with the null keys removed

export default params =>
  Object.keys(params)
    .filter(key => params[key])
    .reduce((acc, curr) => {
      acc[curr] = params[curr];
      return acc;
    }, {});