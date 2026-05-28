import axios from "axios"
import type{typeProps} from"../type/typeProps"

export const  functionalUpdate = async (id:number):Promise<typeProps> => {
    const {data} = await axios.get<typeProps>(`https://swapi.info/api/people/${id}`);
    return data;

}
    
