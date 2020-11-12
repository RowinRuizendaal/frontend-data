const axios = require('axios')

export default fetchData = async (url) => {
    const fetch = await axios.get(url);
    return fetch.data;
}