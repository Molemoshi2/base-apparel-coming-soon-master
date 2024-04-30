function HandleEventSubmit(event)
{
    event.preventDefault();
    const email = document.getElementById('email');
    /*email validation */
    let isEmailValid = false;
    if (email.value.trim() !== '')
    {
        isEmailValid = true
    }
    else
    {
        isEmailValid = false
    }

    if (isEmailValid === true)
    {
        var data = new FormData(event.target);
        console.log(data)
        fetch('https://formspree.io/f/mqkrnedl',
        {
            method: 'POST',
            body: data,
            headers: {
                'Accept': 'application/json'
            }

        }
    )
    .then(response => response.json())
    .then( data =>
    {
        if(data.ok){
            alert('Email sent')
            
        }
    })
     }
     else
     {
       
        if (isEmailValid !== true){
            //display error msg
            const emailSpan = document.getElementById('Email-span')
            emailSpan.classList.remove('error')
            document.getElementById('myform').style.borderColor="red"
        }
        
     }
}
