import axios from 'axios'
import { baseUrl, api_key } from '../const/const'


export const getPelis = (query = 'a') => {
    const uri = `${baseUrl}?api_key=${api_key}&query=${query}`
    let response=''
    axios.get(uri).then((req) => {
        response= req.data
    }).catch((error) => {
        response= error
    })
    return response
}