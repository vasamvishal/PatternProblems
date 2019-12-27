let regex=RegExp('^4[0-9]{2} [0-9]{3}$');
let pincheck=regex.test("400 034");
if(pincheck==true)
{
console.log("TRUe");
}
else
{
console.log("False");
}

