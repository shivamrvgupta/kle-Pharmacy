const scriptURL = 'https://script.google.com/macros/s/AKfycbzW80MAEt-A1vVGxN817A6FhZmsWieI1SqK0zV9rYJ-3IpvAe8j3-6tVNmYiEXa6M731A/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        setTimeout(function(){
            window.location.href = './thankyou.html';
            msg.innerHTML = "Message sent successfully"
        },1000)
        form.reset()
    })
    .catch(error => {
        msg.innerHTML = "There is Error, Please Check the values again"
        setTimeout(function(){
        msg.innerHTML = ""
        },5000)
        form.reset()
    })
})
                  