const subBtn = document.querySelector('.subscribe-button');
const succesDiv = document.querySelector('.succes-div');
const mainDiv = document.querySelector('.main-div');
const email = document.querySelector('#email-placeholder');
const emailRegex = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;
const errorLabel = document.querySelector('.emailLabel');

//use if function

subBtn.onclick = function () {


if (!email.value.match(emailRegex)){
    errorLabel.innerHTML = 'Valid email required';
    document.getElementById('email-placeholder').style.color = '#ff6155';
    document.getElementById('email-placeholder').style.backgroundColor = '#ff000029';
    document.getElementById('email-placeholder').style.borderBlockColorColor = '#ff000061';
    return false;
}
else{
    errorLabel.innerHTML = " ";
    mainDiv.classList.add('active');
    succesDiv.classList.add('active');
    return true;
    }
}