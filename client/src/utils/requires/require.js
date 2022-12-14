
function POST(url, sendData){
    return fetch (url, {
        method: 'POST',
        body: JSON.stringify(sendData)

    })
}
