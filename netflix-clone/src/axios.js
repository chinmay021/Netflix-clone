import axios from "axios";
//axios is kind of postman
//basse to make requests to the movie database

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3"
});

/*instance.get('/foo-bar');
actual URL -> 'https://api.themoviedb.org/3/foo-bar'*/
export default instance; // only 1 default export possible .If more then others wont have default