
export async function login({email, password}: { email: string, password: string }) {
    const res = await fetch('http://localhost:3000/api/users/login', {
        headers: {
            'Content-Type': 'application/json'         
        },
        method: 'POST',
        body: JSON.stringify({
            email,
            password
        })
    })
    const data = await res.json()

    return data.data
}

export async function register({ email, fullname, password }: { email: string, fullname: string, password: string }) {
    const res = await fetch('/api/users', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
            email,
            fullname,
            password
        })
    })
    const data = await res.json()

    return data.data
}

export async function get({ id }: { id: number }) {
    const res = await fetch(`http://localhost:3000/api/users/${id}`)
    const data = await res.json()

    return data.data
}

export async function saveUserBio({ id, bio_text }: { id: number, bio_text: string }) {
    const res = await fetch(`http://localhost:3000/api/users/${id}/bio`, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
            bio_text,
        })
    })
    const data = await res.json()

    return data.data
}