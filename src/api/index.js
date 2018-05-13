import axios from 'axios';

module.exports = {
    queryUser:(username)=>axios.get('https://api.github.com/search/users?q='+username)
};