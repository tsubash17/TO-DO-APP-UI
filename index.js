var key
document.querySelector(".add-tasklist-btn").addEventListener("click",()=>{
	document.querySelector(".container").style.filter="blur(6px)";
	document.querySelector("#add-task").style.visibility="visible";
})

document.querySelector("#close-task-popup-btn").addEventListener("click",()=>{
	document.querySelector("#add-task").style.visibility="hidden";
	document.querySelector(".container").style.filter="blur(0px)";
})

document.querySelector("#add-task-popup-btn").addEventListener("click",()=>{
	closePopup();
	var inputValue=document.querySelector("#inputtext-task").value;
	var node=document.createElement("div");
	node.setAttribute("class","task-details-container");
	node.setAttribute("id",Date.now());
	node.innerHTML=`<div class="task-name-container">
					<div class="task-name">${inputValue}</div>
					<hr class="h-line">
				</div>
				<div id="task-item-list">
				</div>
				<div class="task-details-container-footer">
					<button class="delete-task-btn" onclick="deleteTask(this)">
						<i class="fa fa-trash fa-custom"></i>
					</button>
					<button class="add-task-btn" onclick="AddTaskItemPopup(this)">
						<i class="fa fa-plus fa-custom" ></i>
					</button>
				</div>`
	document.querySelector(".task-list-container").appendChild(node);
})

function deleteTask(Element){
	console.log("hi")
	console.log(Element)
	var taskId = Element.parentNode.parentNode.id
	console.log(taskId);
	var task=document.getElementById(taskId);
	document.querySelector(".task-list-container").removeChild(task)
		
}

function AddTaskItemPopup(Element){
	document.querySelector(".container").style.filter="blur(6px)";
	document.querySelector("#add-taskitem").style.visibility="visible";
	key=Element;
}
document.querySelector("#add-taskitem-popup-btn").addEventListener("click",()=>{
		var Element=key;
		console.log(Element);

/*function addTaskItem(Element){
		/*addTaskItem(Element);
	})*/
	console.log("hi");
	console.log(Element);
	var ID = Element.parentNode.parentNode.id;
	var input =document.querySelector("#input-text-taskitem").value;
	var node = document.createElement("div");
	node.setAttribute("class","task-item");
	node.setAttribute("id",Date.now());
	node.innerHTML=`<span class="sub-task">${input}</span><button class="task-item-complete" onclick="taskItemDone(this)">Mark Done</button>`;
	var parentItem = document.getElementById(ID)
	console.log(document.getElementById(ID));
	parentItem.querySelector("#task-item-list").appendChild(node);
	console.log("hello");
	closePopup();
})

function closePopup(){
	document.querySelector("#add-task").style.visibility="hidden";
	document.querySelector("#add-taskitem").style.visibility="hidden";
	document.querySelector(".container").style.filter="blur(0px)";
}

function taskItemDone(Element){
	var ID = Element.parentNode.id;
	var parentItem = document.getElementById(ID);
	console.log(parentItem.querySelector(".task-item-complete").style);
	parentItem.querySelector(".task-item-complete").style.display="none";
	parentItem.querySelector(".sub-task").style.color="red";
	parentItem.querySelector(".sub-task").style.textDecoration="line-through";
}
	







	