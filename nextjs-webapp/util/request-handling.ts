

export function check(field: any, errMessage: string, errList: Array<string>) {
    if (field == null || field === '') {
        errList.push(errMessage)
    }
}