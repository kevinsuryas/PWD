// SCOPE
// var : tidak mengenal scope
// let&const : mengenal scope

// Local Scope dan Global Scope
// { Local Scope }

//var
{
    var name= 'raihan'
}
console.log(name) 

// let & const
// - declare di global scope(luar) biasa diakses dari local scope(dalam)
/* 
const number =10
{
    console.log(number)
} ini berhasil

{ 
    const number =10
}
console.log(number) --> ini error
*/

{
    const point=100
    {
        console.log(point)
        {
            console.log(point)
        }
    }
}

{
    {
        const discount = 50
        console.log(discount)
    }
}