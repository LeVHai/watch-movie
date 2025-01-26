import axios, {AxiosInstance} from 'axios'
class Http{
    instance: AxiosInstance
    constructor(){
        this.instance = axios.create({
            baseURL:'https://phimapi.com',
            timeout:1000,
            headers:{
                'Content-Type': 'application.json'
            }
        })
    }
}

const httpMovie = new Http().instance
export default httpMovie