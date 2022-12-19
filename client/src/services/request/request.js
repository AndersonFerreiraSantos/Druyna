async function POST(url, sendData){
    return new Promise((resolve) => {
        fetch(`http://localhost:8080${url}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(sendData)
        }).then((response) => {
            resolve(response.json())
        })
    })
}

exports.POST = POST