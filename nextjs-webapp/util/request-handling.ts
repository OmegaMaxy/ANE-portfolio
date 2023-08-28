

export function check(field: any, errMessage: string, errList: Array<string>): boolean {
    if (field == null || field === '') {
        errList.push(errMessage)
        return true
    }
    return false
}