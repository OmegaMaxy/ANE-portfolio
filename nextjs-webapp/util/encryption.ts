import bcrypt from 'bcrypt'

const saltRounds = 10


export async function encryptPassword(password: string): Promise<string> {
    // invalid salt
    return bcrypt.hash(password, '$2b$10$/dvcgRDHAi/xssYWqbTgC.').then((hash: string) => {
        return hash
    }).catch((err: string) => {
        console.log(err)
        throw new Error(err)
    })
}
