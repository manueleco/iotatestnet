const {composeAPI} = require('@iota/core');

const iota = composeAPI({
    provider: 'https://nodes.devnet.iota.org/'
})

iota.getNodeInfo()
    .then(info => console.log(info))
    .catch(error => {
        console.log(`Request error: ${error.message}`)
    })

iota.getTrytes(hashes)
  // Parsing as transaction objects
  .then(trytes => asTransactionObjects(hashes)(trytes))
  .then(transactions => {
    console.log(transactions);
  })
  .catch(err => {
    // ...
  })