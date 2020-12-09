export class CommentsService {
    url = 'https://jsonplaceholder.typicode.com'
    async getAllCommentsFromAPI(){
        return await fetch(this.url + `/comments`).then(value => value.json())
        // return await fetch('https://jsonplaceholder.typicode.com/comments').then(value => value.json())
    }
}