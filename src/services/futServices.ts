import axios from "axios"


export const  functionalUpdate = async (id:number) => {
    const respons = await axios.get(`https://swapi.info/api/people/${id}`);
    return respons.data;

}
    
