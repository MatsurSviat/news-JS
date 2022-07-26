export interface IArticle {
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    source: Pick<ISource, 'id' | 'name'>;
    title: string;
    url: string;
    urlToImage: string;
}

export interface ISource {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}

export interface RootObjectSource {
    status: string;
    sources: ISource[];
}

export interface RootObjectArticle {
    articles: IArticle[];
}
