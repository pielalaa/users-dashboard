const url = 'http://127.0.0.1:8000/api/users'; 

async function getUsers() {
    try {
        const response = await fetch(`${url}/index`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const users = await response.json();
        console.log('Hasil GET:', users);
    } catch (error) {
        console.error('Error saat mengambil data pengguna:', error);
    }
}

async function storeUser() {
    try {
        const response = await fetch(`${url}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: 'John Doe',
                email: 'john@example.com',
                password: 'secret123'
            })
        });
        const result = await response.json();
        console.log('Hasil POST:', result);
    } catch (error) {
        console.error('Error saat mendaftarkan pengguna:', error);
    }
}

getUsers();
storeUser();
