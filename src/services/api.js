const BASE_URL = 'https://61ef115cd593d20017dbb2d8.mockapi.io/contacts';

// 'https://61ef115cd593d20017dbb2d8.mockapi.io/contacts?page=1&limit=5'

export async function fetchContacts(){
    const response = await fetch(BASE_URL);
    const data = await response.json();
    console.log(data)
    return data;
}

export async function fetchCreateContact(contact){
    const response = await fetch(`${BASE_URL}`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json;charset=utf-8'},
                body: JSON.stringify(contact)
            });
    const data = await response.json();
    return data;
}

export async function fetchDeleteContact(id){
    const response = await fetch(`${BASE_URL}/${id}`, {method:"DELETE"});
    const data = await response.json();
    return data;
}




