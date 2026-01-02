// const url = require('url')
// const result = url.parse('https://en.wikipedia.org/wiki/Pedri',true)
// console.log(result.hostname);
// console.log(result.pathname);
// console.log(result.protocol);
// console.log(result.port);

const myUrl = new URL('https://example.com/test?user=ashfaqe')
console.log(myUrl.hostname);
console.log(myUrl.pathname);
console.log(myUrl.protocol);
console.log(myUrl.port);
console.log(myUrl.search);
console.log(myUrl.searchParams);
