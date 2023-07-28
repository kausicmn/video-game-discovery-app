import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api/',
    params:{
        key:'7ea1b8e126224c5bb311ec2a759a2a5d',
    }
})
