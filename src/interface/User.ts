export interface User{
    id? : number | string,
    email:string,
    password:string
}

export interface IProduct{
    id? : number | string,
    name: string,
    img: string
    price:number,
    desc : string,
}