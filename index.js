
document.getElementById('saveBtn').onclick = function(){
    
    var userName = document.getElementById('userName').value;

    var userText = document.getElementById('userText').value;

    console.log(userName, userText);

    localStorage.setItem('userName', userName);
    localStorage.setItem('userText', userText);

    window.location.href = 'index.html';
}
