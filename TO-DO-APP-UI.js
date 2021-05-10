document.querySelector(".add-tasklist-btn").addEventListener("click",()=>{
	document.querySelector(".container").style.filter="blur(6px)";
	document.querySelector(".add-task-container").style.visibility="visible";
})

document.querySelector("#close").addEventListener("click",()=>{
	document.querySelector(".add-task-container").style.visibility="hidden";
	document.querySelector(".container").style.filter="blur(0px)";
})

document.querySelector("#add-task").addEventListener("click",()=>{
	document.querySelector(".add-task-container").style.visibility="hidden";
	var x=document.c;
	document.body.appendChild(x);
})


	