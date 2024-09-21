const menu = document.querySelector('.menu')
    const menuList = document.querySelector('nav ul')
    menu.addEventListener('click',()=>{
        menuList.classList.toggle('showmenu')
    });
 
    function submit() {
        let input = document.querySelector("#input").value
        if(input!= "") {
            document.querySelector("#para1").  innerHTML= " Your Feedback submitted successfully!!!";
        }
        else{
            document.querySelector("#para1").innerHTML= "*please write something!";
        }
    }