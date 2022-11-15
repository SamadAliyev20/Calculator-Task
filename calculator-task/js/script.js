
function Topla()
{
    var input1 =document.getElementById('first').value
    var input2 =document.getElementById('second').value
    var x = Number(input1);
    var y = Number(input2);
    var result=x + y;
    document.getElementById('cavab').innerText=result;
    
}
function Cixma()
{
    var input1 =document.getElementById('first').value
    var input2 =document.getElementById('second').value
    var x = Number(input1);
    var y = Number(input2);
    var result=x - y;
    document.getElementById('cavab').innerText=result;
    
}
function Bolme()
{
    var input1 =document.getElementById('first').value
    var input2 =document.getElementById('second').value
    var x = Number(input1);
    var y = Number(input2);
    var result=x / y;
    document.getElementById('cavab').innerText=result;
    
}
function Vurma()
{
    var input1 =document.getElementById('first').value
    var input2 =document.getElementById('second').value
    var x = Number(input1);
    var y = Number(input2);
    var result=x * y;
    document.getElementById('cavab').innerText=result;
    
}