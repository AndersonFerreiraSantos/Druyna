<Body>
<button type = 'button' onClick = {() => { 
    console.log('clear')
    req.POST('/user/createUser', {email: 'email2@exemple.com', displayName: 'Anderson', password: 'Santer111'})
}}> cadastro google </button>
</Body>