const info = document.querySelector(".info");
const Num = document.querySelector("#number");
const Btn = document.querySelector("#button");



// Num.addEventListener('focus', function() {
//     // if(Num.value >= 1){
//     //     info.innerHTML = "The Number you input is the Number of Jokes you will get";
//     // }

//     info.innerHTML = "The Number you input is the Number of Jokes you will get";    
// })

// Num.addEventListener('blur', function() {
//     // if(Num.value >= 1){
//     //     info.innerHTML = "The Number you input is the Number of Jokes you will get";
//     // }

//     info.innerHTML = "";    
// })

Btn.addEventListener('click', function(e) {


    const xhr = new XMLHttpRequest();

    const value = Num.value;

    xhr.open('GET', `http://api.icndb.com/jokes/random/${value}`, true);

    xhr.onload = function() {
        if(this.status === 200){
            const response = JSON.parse(this.responseText)
            // console.log(response);

            let output = '';

            if(response.type === 'success') {
                response.value.forEach(function(joke) {
                    output += `<li>${joke.joke}</li>`
                })
            }else {
                output += '<li>Something went wrong!</li>'
            }

            document.querySelector(".output").innerHTML = output;

        }
    }

    xhr.send();

    e.preventDefault();
})