export type User = {
    name: string;
    phone: string;
    email: string;
    address: string;
    position_name: string;
    department: string;
    hire_date: string;
}

export enum Statuses {
    success = 'success',
    error = 'error',
}
export type UsersResponse =
    {
        status: Statuses.success
        data: User[]
    } |
    {
        status: Statuses.error
        data: string
    }