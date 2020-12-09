export class UsersService {
    url = 'https://jsonplaceholder.typicode.com'
    async getAllUsersFromAPI(){
        return await fetch(this.url + `/users`).then(value => value.json())
    }
}