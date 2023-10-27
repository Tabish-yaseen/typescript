let num1=document.getElementById('num1') as HTMLInputElement
let num2=document.getElementById('num2')as HTMLInputElement
let sbtBtn=document.querySelector('button')!

type NumOrString= number|string
type Result={val:number,timestamp:Date}

// add function
function add (num1:NumOrString,num2:NumOrString){

    if(typeof num1==='number' && typeof num2==='number'){
        return num1+num2

    }

    else if(typeof num1==='string'&& typeof num2==="string"){
        return num1+''+num2
    }

    else{
        return +num1 + +num2
    }
    

}

// arrays
let stringResult:Array<string>=[]
let numResult:number[]=[]

//object
function printResult(resultobj:Result){
    console.log(resultobj.val)

}

//button 
sbtBtn.addEventListener('click',()=>{
    const num1value=num1.value
    const num2value=num2.value
    const numbervalue=add(+num1value,+num2value)
    numResult.push(numbervalue as number)
    const stringvalue=add(num1value,num2value)
    stringResult.push(stringvalue as string)
    printResult({val:numbervalue as number,timestamp:new Date()})
    console.log(stringResult,numResult)
})

const myPromise=new Promise<string>((resolve,reject)=>{
    setTimeout(()=>{
        resolve('it worked')

    },1000)
})
myPromise.then((result)=>{
    console.log(result.split('w'))
})

