export class PostsService {
    url = 'https://jsonplaceholder.typicode.com'
    async getAllPostsFromAPI(){
        return await fetch(this.url + `/posts`).then(value => value.json())
    }
}