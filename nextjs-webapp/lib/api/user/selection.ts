
export type UserSession = {
    id: number,
    email: string,
    fullname: string,
    profile_picture: string,
    portfolio_banner: string,
}

export const PublicUserSelect = {
    id: true,
    email: true,
    fullname: true,
    profile_picture: true,
    bio_text: true,
    portfolio_banner: true,
    password: false
}

export const PublicUserSelectWithLatestPost = {
    id: true,
    email: true,
    fullname: true,
    profile_picture: true,
    bio_text: true,
    portfolio_banner: true,
    password: false,
    posts: {
        orderBy: { publish_date: 'desc' },
        take: 1
    }
}