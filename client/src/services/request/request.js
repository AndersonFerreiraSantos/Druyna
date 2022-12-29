async function POST(url, sendData){
    return new Promise((resolve) => {
        fetch(`http://localhost:8080${url}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(sendData)
        }).then((result) => {
            resolve(result.json())
        })
    })
}

async function GET(url){
    return new Promise((resolve) => {
        fetch(`http://localhost:8080${url}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
        }).then((result) => {
            resolve(result.json())
        })
    })
}

async function PUT(url, sendData){
    return new Promise((resolve) => {
        fetch(`http://localhost:8080${url}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(sendData)
        }).then((result) => {
            resolve(result.json())
        })
    })
}


const method = {
    POST,
    GET,
    PUT,
}

export default method