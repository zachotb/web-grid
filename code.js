document.addEventListener("DOMContentLoaded", () => {
  // Initial clean up. DO NOT REMOVE.
  initialCleanup();
  document.getElementById("btn-add-line").addEventListener("click",
    ()=>{
      console.log("click ici !")
      for (let i=0; i<10; i++){
        my_div=document.createElement('div')
        grid.appendChild(my_div)
      }
    }   
)

document.getElementById("grid").addEventListener("click",
()=>{
  
  for (square of grid.children){
      square.addEventListener("click",(event)=> {
      const randomColor=Math.floor(Math.random()*16777215).toString(16);
      event.target.style.backgroundColor="#"+randomColor;
        
        
      }
      
      )
  }
}   
)

document.getElementById("grid").addEventListener("mouseover",
()=>{
  
  for (square of grid.children){
      square.addEventListener("mouseover",(event)=> {
      event.target.style.backgroundColor="blue";
        
        
      }
      
      )
  }
}   
)

  
});

/**
 * Cleans up the document so that the exercise is easier.
 *
 * There are some text and comment nodes that are in the initial DOM, it's nice
 * to clean them up beforehand.
 */
function initialCleanup() {
  const nodesToRemove = [];
  document.getElementById("grid").childNodes.forEach((node, key) => {
    if (node.nodeType !== Node.ELEMENT_NODE) {
      nodesToRemove.push(node);
    }
  });
  for (const node of nodesToRemove) {
    node.remove();
  }
}





