function isEven(num) 
{
    return (num%2 == 0); 
}
function find(num,callback)
{
    for(var i = 0;i<num.length;i++)
    {
        if(num[i]%2 == 0)
        {
            return num[i];
        }
    }
    
    callback();
}

console.log(isEven(3));
console.log(isEven(4));
console.log(find([1,3,5,4,2],find));









// console.log(isEven(1));