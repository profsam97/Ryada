//interface for the product
export interface IProduct {
    name : string,
    title: string,
    bid: string,
    image: string
}
export type TData = {
    data : IProduct[]
}