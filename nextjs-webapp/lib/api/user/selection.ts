
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
    password: false,
    portfolio_design: {
        select: {
            id: true,
            bg_color: true,
            secondary_color: true,
            posts_bio_type: true,
            show_free_footer: true,
            show_latest_post: true,
            show_subscribe_box: true,
        }
    }
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