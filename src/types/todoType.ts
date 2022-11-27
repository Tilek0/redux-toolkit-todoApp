export type todoType = {
    todoText: string
    done?: boolean
    id?: string
    file?: File | null | string
    deadline?: string
}

export type todoList = {
    list: todoType[]
    isForm: boolean
    current: todoType
}

