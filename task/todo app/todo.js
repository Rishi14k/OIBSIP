let todolist = [{item:'ENTER YOUR TASK NAME', dueDate: 'ENTER YOUR TASK DATE'}];
show();

function adding(){
    let inputEl=document.querySelector("#input");
    let dateEl=document.querySelector("#idate");
    let invalue=inputEl.value;
    let datevalue=dateEl.value;
    todolist.push({item:invalue, dueDate:datevalue});
    inputEl.value=" ";
    dateEl.value=" ";

    show();
}

function show(){
        let mainContent = document.querySelector(".main");
        let newHtml=' ';
        for(let i=0;i<todolist.length;i++){
           let{item,dueDate} = todolist[i];
            newHtml+=`
            
            <span>${item}</span>
            <span>${dueDate}</span>
            <button  class='btndelete' onclick="todolist.splice(${i},1); show();">Delete</button>
            
            `; 
            
    }
    mainContent.innerHTML=newHtml;
}