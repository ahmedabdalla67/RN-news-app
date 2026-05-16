import axios from "axios";

const baseUrl = "https://newsapi.org/v2/";
const apiKey = "c94b22defbd6451691718265f6dc1d73";
export function get(url: string) { 
    const myUrl = `${baseUrl}${url}&apiKey=${apiKey}`;
    return axios.get(myUrl);
}