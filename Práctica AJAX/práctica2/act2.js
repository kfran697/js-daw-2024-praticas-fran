const BASE_URL = 'https://reqres.in/api/users/';
const POSTMAN_URL = 'https://httpbin.org/post';

//Código principal dentro del evento load
// para asegurar la carga de los componentes
window.addEventListener('load', (ev) => {
  let numsecs = document.getElementById('numsecs');
  let user = document.getElementById('user');
  let boton = document.querySelector('button');

  boton.addEventListener('click', (ev) => {
    ev.preventDefault();
    clearFields();
    procesarFetch(numsecs.value, user.value);
  });
});

function clearFields() {
  document.querySelectorAll('span').forEach((element) => {
    element.innerHTML = '';
    console.log(element);
  });
}

function procesarFetch(numsecs, user) {
    fetch(BASE_URL + user + `?delay=${numsecs}`) 
        .then((response) => {
            let state = response.status;
            if (response.ok) {
                return response.json()
                    .then((data) => {
                        return {data, state};
                    });
            } else {
                return Promise.reject(state);
            }
        })
        .then(({data, state}) => {
            return new Promise((resolve, reject) => {
                let userData = data.data;
                document.getElementById('id').innerHTML = userData.id;
                document.getElementById('email').innerHTML = userData.email;
                document.getElementById('status').innerHTML = state;
    
                resolve(userData);
            });
        })
        .then((userData) => {
            procesarFetchPost(userData);
        })
}

// Funcion para procesar el post
function procesarFetchPost (userData) {
    fetch (POSTMAN_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData)
        })
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                return Promise.reject(response.status);
            }
        })
        .then((data) => {
            let userData = data.json;
            document.getElementById('name').innerHTML = userData.first_name;
        })
        .catch((error) => {
            error = String(error).slice(-3);
            document.getElementById('status').innerHTML = error;
    });
}