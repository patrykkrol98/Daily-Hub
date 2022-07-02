export interface News {
    title: string,
    url: string,
    urlToImage: string,
    content: string,
    description: string,
    publishedAt: Date,
    source: { name: string }
}