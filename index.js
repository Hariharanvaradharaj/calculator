let os=document.getElementById('os')

function Clear()
{
    os.value="0"

}

function del()
{

    os.value=os.value.slice(0,-1)
}

function display(txt)
{
    os.value=os.value+txt;
    console.log(os.value);

}

function calc()
{

    os.value=eval(os.value);
}

function tri()
{
    let b=prompt('Enter Breath');
    let h=prompt('Enter height');
    let res=0.5*b*h
    alert(`the result is ${res}`);
}

function cir()
{
    let h=prompt('Enter Area of radius');
    let res=3.141*h*h
    alert(`the result is ${res}`);

}
function squ()
{
    let h=prompt('Enter Area value');
    let res=h*h
    alert(`the result is ${res}`);

}

function Rec()
{
    let b=prompt('Enter Height Value');
    let h=prompt('Enter Breath Value');
    let res=b*h
    alert(`the result is ${res}`);
}