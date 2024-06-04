let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector(".reset");
let newGameBtn=document.querySelector(".newgame");
let msg=document.querySelector(".msg");
let msgContainer=document.querySelector(".msg-container");

var winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
let turn0=true;
let count=0;

const resetGame = () => {
    turn0=true;
    count=0;
    enableBoxes();
    msgContainer.classList.add("hide");
}


boxes.forEach((box) => {
    box.addEventListener("click",() => {
        if(turn0){
            box.textContent="O";
            turn0=false;
        }else{
            box.textContent="X";
            turn0=true;
        }
        box.disabled=true;
        count++;

        let isWinner=checkWinner();
    
        });

        if(count === 9 ){
            if(!isWinner){
                drawGame();
            }
            
        }
});

const drawGame = () => {
    msg.innerText= `Tie Game `;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const enableBoxes = () => {
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const disableBoxes = () => {
    for(box of boxes){
        box.disabled=true;
    }
}
const showWinner=(winner)=>{
    msg.innerText=`Congratulations , Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner=()=>{
    for(let pattern of winPatterns){
        
        let pos1val =boxes[pattern[0]].innerText;
        let pos2val =boxes[pattern[1]].innerText;
        let pos3val =boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val !=""){
            if(pos1val===pos2val && pos2val===pos3val){
                showWinner(pos1val);
            }
        }
    }

}

resetBtn.addEventListener("click",resetGame);
newGameBtn.addEventListener("click",resetGame);
