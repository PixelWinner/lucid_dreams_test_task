import {QueryClient} from "@tanstack/react-query";
import axios from "axios";

export const QueryClientInstance = new QueryClient()

export const AxiosInstance = axios.create({
    baseURL: "https://652f91320b8d8ddac0b2b62b.mockapi.io"
});

