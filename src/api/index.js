import Axios from 'axios'


export default Axios.create({
    baseURL: 'https://deezerdevs-deezer.p.rapidapi.com',
    timeout: 3000,
    headers: {
      "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
      "x-rapidapi-key": "0357283b83msh313e6bd9ed94363p11a2f6jsn5d3e67945c84"
     }
  });