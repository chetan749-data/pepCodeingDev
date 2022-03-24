fun();                                // with fun() before intialising, it gives error ssaying that fun is not a function as fun is having undefined in GEC
var fun=function()          // here  we intitialise the function 
{
    console.log("g");
}
fun();      /// so this function gives output "g" 