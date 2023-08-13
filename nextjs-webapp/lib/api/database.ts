

interface DB {
    get()
    getMany()
    create()
    update()
    destroy()
}

class PrismaDB implements DB {

    constructor() {

    }

    get() {
        //prisma.user.find()
    }
    getMany() {
        throw new Error("Method not implemented.")
    }
    create() {
        throw new Error("Method not implemented.")
    }
    update() {
        throw new Error("Method not implemented.")
    }
    destroy() {
        throw new Error("Method not implemented.")
    }

}

class MockDB implements DB {
    get() {
        throw new Error("Method not implemented.")
    }
    getMany() {
        throw new Error("Method not implemented.")
    }
    create() {
        throw new Error("Method not implemented.")
    }
    update() {
        throw new Error("Method not implemented.")
    }
    destroy() {
        throw new Error("Method not implemented.")
    }

}