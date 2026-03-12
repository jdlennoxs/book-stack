import { config } from '../config';

export async function fetchUserBooks(username: string) {
    const url = config.getGraphqlUrl(username);

    const response = await fetch(url);

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to fetch books: ${errorText}`);
    }

    const result = await response.json();

    if (result.errors) {
        throw new Error(result.errors[0].message);
    }

    return result.data;
}
