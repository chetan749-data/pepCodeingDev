function add(a,b)
{
    return a+b;
}
function sub(a,b)
{
    return a-b;
}
function mul(a,b)
{
    return a*b;
}
function div(a,b)
{
    return a/b;
}

module.exports={     // to export this object to any particular file we should use module.exports,, 
    addition:add,
    subtraction:sub,
    multiplication:mul,
    division:div
}
