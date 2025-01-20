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
    fetch(BASE_URL + user) 
        .then((response) => {
            let state = response.status;
            if (response.ok) {
                return response.json()
                    .then((data) => {
                        return {data, state};
                    });
            } else {
                throw new Error(state);
            }
        })
        .then(({data, state}) => {
            let userData = data.data;

            setTimeout(() => {
                document.getElementById('id').innerHTML = userData.id;
                document.getElementById('email').innerHTML = userData.email;
                document.getElementById('name').innerHTML = userData.first_name;
                document.getElementById('status').innerHTML = state;
            }, numsecs * 1000);
        })
        .catch((error) => {
            setTimeout(() => {
                error = String(error).slice(-3);
                document.getElementById('status').innerHTML = error;
            }, numsecs * 1000);
        });
}
