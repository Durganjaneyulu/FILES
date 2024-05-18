function insert(num) 
{
document.cal.textview.value = document.cal.textview.value + num;
}


function equal()
{
var exp = document.cal.textview.value;
if(exp)
{
document.cal.textview.value = eval(exp)
}
}
