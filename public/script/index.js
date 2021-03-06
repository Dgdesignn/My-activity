function onOff(){
    document.querySelector('#modal')
        .classList
        .toggle('hide')

    document.querySelector('body')
    .classList
    .toggle('hideScroll')

    document.querySelector('#modal')
    .classList
    .toString('hideScroll')
}


//Validando formulário
function checkFields(event){

    const valuesToCheck = [
        "title",
        "image",
        "category",
        "description",
        "link",
    ]

    const isEmpty = valuesToCheck.find(function(value){

        const checkIfIsString = typeof event.target[value].value === "string"
        const checkIfEmpty = !event.target[value].value.trim()

        if(checkIfIsString && checkIfEmpty){
            return true;
        }
        
    })

    if(isEmpty){
        event.preventDefault()
        alert("Preencha todos os campos por favor!")
    }


   
    //console.log(isEmpty)
}