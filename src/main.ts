// let nama = 'Ridho Al'
// console.log(nama)

// const a = 8
// const b = '2'
// const c = 3

// console.log(a*b)

// let nama : string;
// let umur : number;
// let pacar:boolean;

// const showID = (a : number,b:string)=>{
//     return a+b
// }

// let isActive: boolean|number;

//type alias 

type stringOrNum = string|number

type data1 = {
    nama ?: string,
    umur : number,
    kelas : stringOrNum
}

type userId = stringOrNum


type numParams = (a : number, b:number)=>number



//function
const add = (a : number, b:number)=>{
    return a+b
}
const show = (message : any)=>{
    console.log(message)
}

show(add(1,2));


//function with type
let tambah:numParams = function(c,d){
    return c*d
}
show(tambah(3,5))


//function with interface
interface numInterface{
   (num1:number,num2:number) :number
}

let kurang : numInterface = function(x,y){
    return x-y
}

show(kurang(10,4))

//optional parameter

const addAll = (a:number, b:number, c?:number):number =>{

    if (typeof c !== 'undefined'){
        return a+b+c
    }
    else{
        return a+b
    }
}
show(addAll(4,5))

//rest parameters
const tambahRest = (a:number, ...args : number[])=>{
    return a + args.reduce((prev,curr)=> prev+curr)
}

show(tambahRest(3,2,4,3,-9))