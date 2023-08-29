function send() {
    document.getElementById('message').innerText = "";
    let message = document.getElementById('message').value;
    let name = localStorage.getItem('value1');
    let chat = name + message;
    console.log(chat)
}

function app() {
    //ввод имени
    let name = document.getElementById('name').value;
    localStorage.setItem('value1', `${name}:`)

    const result = `Привет `+ name

    //вывод данных
   document.getElementById('result').innerText = result
   }
var user = app(result)