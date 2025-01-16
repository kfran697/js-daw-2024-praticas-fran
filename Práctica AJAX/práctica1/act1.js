let contentZone = document.getElementById('content');

fetch('https://fakerapi.it/api/v2/persons?_quantity=1')
    .then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            return new Error('No se ha podido conectar ' + response.statusText);
        }
    })
    .then((data) => {
        let personalData = data.data[0];
        console.log(personalData);

        let br = document.createElement('br');
        let emailLink = document.createElement('a');
        emailLink.href = 'mailto:' + personalData.email;
        emailLink.innerText = 'Email: ' + personalData.email;

        contentZone.innerHTML = personalData.firstname + ' ' + personalData.lastname;
        contentZone.appendChild(br);
        contentZone.appendChild(emailLink);
        contentZone.innerHTML += '<br>' + personalData.address.street;
        contentZone.appendChild(br);
        contentZone.innerHTML += `${personalData.address.city} ${personalData.address.country_code.toLowerCase()}. (${personalData.address.country.toUpperCase()})`;
    })
    .catch((error) => {
        console.log(error)
    });