import axios from "axios";
import type { Article } from "../types/article";

export async function fetchArticles(topic: string, page: number) {
    const { data } = await axios.get<{ hits: Article[], hitsPerPage: number, nbHits: number, nbPages: number, page: number, }>("https://hn.algolia.com/api/v1/search", {
        params: {
            query: topic,
            page
        },
    },);
    return data;
}