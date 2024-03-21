import {API_URLS} from "../utils/constants/api.constants";
import {AxiosInstance} from "./api";
import {GetAutocompleteResponse} from "../utils/types/api.types";
import {GenericAbortSignal} from "axios";


const getAutocomplete = async (query: string, signal: GenericAbortSignal ): Promise<GetAutocompleteResponse> => {
    return await AxiosInstance.get(API_URLS.autocomplete, {params: {name: query}, signal}).then(response => response.data).catch(error => error)
}

export const ENDPOINTS = {
    getAutocomplete
}