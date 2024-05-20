export interface User{
    id? : number | string,
    email:string,
    password:string
}

export interface IProduct{
    _id? : number | string,
    name: string,
    image: string
    price:number,
    desc : string,
    categoryId: string[] | string
}
export interface Category{
    id? : number | string,
    name: string,
}