const compose = (a,b) => (data) => a(b(data))


var square = function square(x)
{
    return (x * x);
}

var double = function double(x)
{
    return (x + x);
}

var f1 = compose(square, double);
console.log(f1(5));
console.log(f1(10));

var f2 = compose(double, square);
console.log(f2(5));
console.log(f2(10));