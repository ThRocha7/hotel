const cadastrarEmail = document.querySelector('#cadastro-email')

cadastrarEmail.addEventListener('click', ()=>{
    let arroba = '@'
    let final = '.com'
    const inputEmail = document.querySelector('#email').value
    if (inputEmail.includes(arroba) && inputEmail.includes(final)){
        alert("E-mail cadastrado com sucesso!")
    } 
    else alert('Email inválido, tente novamente')
})