async function POST(url, sendData){
    return new Promise((resolve, reject) => {
        fetch(`${url}`, {
            method: 'POST',
            body: JSON.stringify(dados)
        }).then((response) => {
            console.log(response)
        })
    })
}

exports.POST = POST