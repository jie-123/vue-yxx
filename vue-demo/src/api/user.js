import axios from "axios";

export function getuser(){
    return axios.get("/api/import/testMybatis")
}