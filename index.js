const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

const products = require('./products.json');
const orders = require('./orders.json')
const credentials = require('./credentials.json');

initializeApp({
    credential: cert(credentials)
})

const db = getFirestore()

const prodRef = db.collection('products')

//Add each product to products collection
// prodRef.add(products[3])
//     .then((doc) => {
//         console.log('Added product', doc.id)
//     })
//     .catch(console.error)

//Read one document in products collection
// prodRef.doc('Tk9fGfTdqXVhwk3MOKE2').get()
//     .then(doc => {
//         console.log(doc.id, doc.data())
//     })
//     .catch(console.error)

//Read a collection
// prodRef.get()
//     .then(snapshot => {
//         snapshot.forEach(doc => {
//             console.log(doc.data())
//         })
//     })
//     .catch(console.error)

//Update a document
prodRef.doc('k4gec57HxqLQhzfi4GcS')
    .update({price: 10})
    .then(console.log('Record updated'))
    .catch(console.error)