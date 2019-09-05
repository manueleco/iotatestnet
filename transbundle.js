const {composeAPI} = require('@iota/core');

const iota = composeAPI({
    provider: 'https://nodes.devnet.iota.org/'
})

iota.getTrytes({hash: ['MP9QHRILBURIBJGLUVYVS9DNRVSNZBDAFRGPDHIVAEG9HFHCETGHGBKJIXYVWYJKFEKHJUVDTLZRWS999'] })
// Parsing as transaction objects
.then(trytes => asTransactionObjects(hashes)(trytes))
.then(transactions => {
  console.log(transactions)
;})
.catch(err => {
  // ...
})