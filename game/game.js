let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".img");
const msg = document.querySelector("#msg");
const userpara = document.querySelector("#user-score");
const comppara = document.querySelector("#comp-score");

const gencompchoice = () =>{
    const option = ["stone" , "paper" , "scissor"];
    const ranidx = Math.floor( Math.random() * 3);
    return option[ranidx];
}

const gamedraw = () => {
   
    msg.innerText = "Game Draw";
    msg.style.backgroundColor="rgb(255,255,150)";
    msg.style.color="black";
};

const showWinner = (userwin) =>{
    if(userwin){
        userscore++;
        userpara.innerText=userscore;
        msg.innerText="You Win!"
        msg.style.backgroundColor="green"; 
        msg.style.color="white";
    }else{
        
        compscore++;
        comppara.innerText=compscore;
            msg.innerText = "You Lose";
            msg.style.backgroundColor="red";
            msg.style.color="white";
        
    }
};

const playgame = (userchoice) => {
        console.log("user choice" , userchoice);
        const compchoice = gencompchoice();
        console.log("comp choice" , compchoice);

        if(userchoice === compchoice){
            gamedraw();
        }
        else{
            let userwin = true;
            if(userchoice === "stone"){
                userwin = compchoice === "paper" ? false : true ;
            }
            else if(userchoice === "paper"){
                userwin = compchoice === "scissor" ? false : true;
            }
            else{
                userwin = compchoice === "rock" ? false : true;
            }

            showWinner(userwin);
            
        }

};

choices.forEach((img) =>{
    img.addEventListener("click", () =>{
        const userchoice = img.getAttribute("id");
        playgame(userchoice);
    });
});