import { ApiResponseSingle, Order, Buyer } from "@/@types/types";
import { apiSlice } from "@/redux/apiSlice";

export const orderSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        placeOrder: builder.mutation<ApiResponseSingle<Order>,{buyer:Buyer, service_id: string, package_option_id: string}>({
            query: ({buyer, service_id, package_option_id}) => ({
                url: "/orders/place",
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({buyer, service_id, package_option_id}),
                credentials: "include",
            })
        })
    })
})


export const {usePlaceOrderMutation} = orderSlice;