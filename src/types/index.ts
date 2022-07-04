
 export interface IArticle {
    author: string,
    content: string,
    description: string,
    publishedAt: string,
    source: Pick <ISource, 'id' | 'name'>
    title: string,
    url: string,
    urlToImage: string
}

export interface ISource {
    id: string,
    name: string
}

