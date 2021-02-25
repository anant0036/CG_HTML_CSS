function map(num)
{
    var final = [];
    for(var i = 0;i<num.length;i++)
    {
        var p = num[i] * num[i];
        // console.log(p);
        final.push(p);
    }
    console.log(final);
}

function mapsq(num)
{
    var final = [];
    for(var i = 0;i<num.length;i++)
    {
        var j = num[i];
        var p = Math.sqrt(j);
        final.push(p);
    }
    console.log(final);
}


map([1,2,3,4,5]);
mapsq([1,4,9,16,25]);
