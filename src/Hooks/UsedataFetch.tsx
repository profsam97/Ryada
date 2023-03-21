import axios from "axios";
import {baseUrl} from "@/BaseUrl/BaseUrl";
import {useQuery} from "react-query";
import {TData} from "@/Helpers/types";


//custom hook to fetch data from api
export const useDataFetch = (onSuccess: (fetchedData: TData) => void) => {

    //fetch handler responsible for fetching data
    const fetchDataHandler = async () => {
        const response = await axios.get(`${baseUrl}`);
        return response.data;
    }
    // react-query
    return useQuery('fetchData', fetchDataHandler, {
        onSuccess,
        onError: (err) => err
    })
}