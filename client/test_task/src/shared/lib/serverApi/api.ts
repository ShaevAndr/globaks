import { SERVER } from "./consts";
import { UsersResponse, Statuses } from "./types";

const generateUrl = (term?: string) => {
    const url = new URL(SERVER);
    if (term) {
        url.searchParams.append('term', term);
    }
    return url;
}

export const fetchUsers = async (term?: string): Promise<UsersResponse> => {
    const url = generateUrl(term);
    try {

        const response = await fetch(url);
        const users = await response.json();

        if (!response.ok) {
            return {
                status: Statuses.error,
                data: 'Ошибка сервера'
            };
        }
        return {
            status: Statuses.success,
            data: users
        };
    } catch (error) {
        return {
            status: Statuses.error,
            data: 'Ошибка при запросе к серверу'
        };
    }
}