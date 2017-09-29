document.addEventListener("DOMContentLoaded", function(){
    var button = document.createElement("button");
    button.innerText = "Add Square";
    document.body.appendChild(button);
    
    

    button.addEventListener("click", function(){
        var divSquare = document.createElement("div");
        divSquare.className = "square";
        document.body.appendChild(divSquare);
        var squareCount = document.getElementsByTagName("div");
        divSquare.id = squareCount.length;
        var h3 = document.createElement("h3");
        h3.innerText = divSquare.id;
        divSquare.appendChild(h3);

        divSquare.addEventListener("mouseenter", function(){
            h3.style.opacity = "1";

        });

        divSquare.addEventListener("mouseleave", function(){
            h3.style.opacity = "0"; 

        });

        divSquare.addEventListener("click", function(){
            function generate() {
                var hexValues = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e"];
                var newColor = "#";
                for ( var i = 0; i < 6; i++ ) {
                    var x = Math.round( Math.random() * 14 );
                    var y = hexValues[x];
                    newColor += y;
                }
                divSquare.style.backgroundColor = newColor;
                
            }
            generate();
        });  

        divSquare.addEventListener("dblclick", function(){
            var id = Number(divSquare.id);
            var elementToRemove;

            // if(id % 2 === 0 && divSquare.nextSibling !== null){
            //     elementToRemove = divSquare.nextSibling;
            // } else if (id % 2 === 1 && divSquare.previousSibling !== button) {
            //     elementToRemove = divSquare.previousSibling;
            // }

            // if (elementToRemove !== undefined) {
            //     elementToRemove.remove();
            // } else {
            //     alert('Nothing to remove');
            // }

            if(divSquare.previousSibling === button ){
                alert("Nothing to remove");    
            }else if(id%2 === 1){
                divSquare.previousSibling.remove();
            }else if (divSquare.nextSibling === null){   
                alert("Nothing to remove"); 
            }else if(id%2 === 0){
                divSquare.nextSibling.remove();
            }
        });
    });
});

