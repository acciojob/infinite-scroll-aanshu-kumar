let arr=["Item 1","Item 2","Item 3","Item 4","Item 5","Item 6","Item 7","Item 8","Item 9"]
let list=document.getElementById("infi-list");
arr.map((item)=>{
	list.innerHTML += `<li>${item}</li>`
})
let index=arr.length;
list.addEventListener("scroll",()=>{
        list.innerHTML +=`<li>Item ${++index}</li>`
})