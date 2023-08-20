
export async function createPost({ user_id, title, content }: { user_id: number, title: string, content: string }) {
    const res = await fetch(`http://localhost:3000/api/posts`, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
            user_id,
            title,
            content
        })
    })
    const data = await res.json()

    return data.data
}

export async function getPost({ id }: { id: number }) {
    const res = await fetch(`http://localhost:3000/api/posts/${id}`)
    const data = await res.json()

    return data.data
}

export async function savePost({ id, title, content }: { id: number, title: string, content: string }) {
    const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'PATCH',
        body: JSON.stringify({
            title,
            content
        })
    })
    const data = await res.json()

    return data.data
}