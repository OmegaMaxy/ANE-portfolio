import { PostsPageBioType } from "@prisma/client"

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
        method: 'PATCH',
        body: JSON.stringify({
            bio_text,
        })
    })
    const data = await res.json()

    return data.data
}
export async function saveUserPortfolioDesign({ 
    user_id, 
    bg_color,
    secondary_color,
    posts_bio_type,
    show_free_footer,
    show_latest_post,
    show_subscribe_box }: { 
        user_id: number, 
        bg_color: string,
        secondary_color: string,
        posts_bio_type: PostsPageBioType,
        show_free_footer: boolean,
        show_latest_post: boolean,
        show_subscribe_box: boolean
    }) {
    const res = await fetch(`http://localhost:3000/api/users/${user_id}/update-design`, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'PATCH',
        body: JSON.stringify({
            bg_color,
            secondary_color,
            posts_bio_type,
            show_free_footer,
            show_latest_post,
            show_subscribe_box
        })
    })
    const data = await res.json()

    return data.data
}

export async function getPosts({ user_id, filter }: { user_id: number, filter?: { type: 'all' | 'published' | 'draft', order: 'newest' | 'oldest' | 'recent' } }) {
    if (!filter) {
        filter = { type: 'all', order: 'newest'}
    }
    if (user_id == null) {
        return []
    }
    const filterUrl = `user_id=${user_id}&type=${filter.type}&order=${filter.order}`
    const res = await fetch(`http://localhost:3000/api/posts?${filterUrl}`)
    const data = await res.json()
    
    return data.data
}

export async function getRecentUsers() {
    const res = await fetch(`http://localhost:3000/api/users/recent`)
    const data = await res.json()
    
    return data.data
}