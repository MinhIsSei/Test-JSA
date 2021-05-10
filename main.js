var objPeople = [
    {
        email: 'genie_kish@bellsouth.com',
        phone: 123,
        password: 'benjamin03',
        username: 'Kish',
    },
    {
        email: 'nhom874384738@gmail.com',
        phone: 345,
        password: '1564565',
        username: 'Peter',
    },
    {
        email: 'ijuvota@gmail.com',
        phone: 567,
        password: 'cdefgahc',
        username: 'John',
    }
]

localStorage.setItem("objPeople", JSON.stringify(objPeople));
var storedNames = JSON.parse(localStorage.getItem("objPeople"));

function getInfo() {
    var emailPhone = document.getElementById("emailPhone").value
    var password = document.getElementById("password").value

    for (i = 0; i < objPeople.length; i ++) {
        if (emailPhone == objPeople[i].email || emailPhone == objPeople[i].phone && password == objPeople[i].password) {
            alert(objPeople[i].username + ' is logged in! ' +
            'Redirecting to youtube.com...' )
            location.replace("https://www.youtube.com")
            return
        }
    }
    alert('Incorect username or password!')
}

