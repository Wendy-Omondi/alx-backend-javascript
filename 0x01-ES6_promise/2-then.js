export default function handleResponseFromAPI(promise) {
  let p = new Promise((resolve, reject) => {
    if(success) {
      resolve({ status: 200, body: 'Success' })
    } else {
      reject(new Error())
    }
});

return promise.then(() => {
  console.log('Got a response from the API' + promise)
})

}

