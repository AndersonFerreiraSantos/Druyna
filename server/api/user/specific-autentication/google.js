const db = require('../../../database/autentication-firbase') 

async function authGoogle(){
    const provider = new firebase.auth.GoogleAuthProvider();
    let result = await firebase.aut().signInWithPopup();
    return result
}

exports.authGoogle = authGoogle 