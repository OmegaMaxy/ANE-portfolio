
export async function login({email, password}: { email: string, password: string }) {
    const res = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({
            email_address: email,
            password
        })
    })
    const data = res.json()

    return data
}