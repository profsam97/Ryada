import axios from "axios";
import {baseUrl} from "@/BaseUrl/BaseUrl";
import {useQuery} from "react-query";
import {TData} from "@/Helpers/types";

export const useDataFetch = (onSuccess: (fetchedData: TData) => void) => {
    const fetchDataHandler = async () => {
        const response = await axios.get(`${baseUrl}`);
        return response.data;
    }

    return useQuery('fetchData', fetchDataHandler, {
        onSuccess,
        onError: (err) => err
    })
}