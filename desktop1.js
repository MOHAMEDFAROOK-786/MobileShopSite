var count=0;
var total=0;
var amount=document.getElementById('amount');
var output=document.getElementById('output');


 function buy(){
        collect();
        total=total+48990;
        amount.innerHTML=total;
    }
    function buy1(){
        collect();
        total=total+57660;
        amount.innerHTML=total;
    }
    function buy2(){
        collect();
        total=total+28660;
        amount.innerHTML=total;
    }
    function buy3(){
        collect();
        total=total+35990;
        amount.innerHTML=total;
    }
    function buy4(){
        collect();
        total=total+47660;
        amount.innerHTML=total;
    }
    function buy5(){
        collect();
        total=total+35660;
        amount.innerHTML=total;
    }
    function buy6(){
        collect();
        total=total+69660;
        amount.innerHTML=total;
    }
    function buy7(){
        collect();
        total=total+28660;
        amount.innerHTML=total;
    }
    function buy8(){
        collect();
        total=total+50660;
        amount.innerHTML=total;
    }
    
    

    function collect(){ 
    count++;
    output.innerHTML=count;
    }






    let a=1;
    function mode(){
        if(a==1){
        document.body.style.background='grey';
        a++;
    }
    else if(a==2){
        document.body.style.background='#6578';
        a++;
    }
    else if(a==3){
        document.body.style.background='#9998';
        a++;
    }
    else if(a==4){
        document.body.style.background='#5827';
        a++;
    }
    else{
        document.body.style.background='whitesmoke';
        a=1;
    }
}

