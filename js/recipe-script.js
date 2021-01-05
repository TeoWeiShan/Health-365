function getrecepe(q){
    $.ajax({
    url:"https://api.spoonacular.com/recipes/complexSearch?apiKey=db254b5cd61744d39a2deebd9c361444&addRecipeNutrition=true&query="+q,
    success: function(res) {
      
    document.getElementById("output").innerHTML = "";
    for (var i=0; i<res.results.length;i++){
    document.getElementById("output").innerHTML+= 
    
    "<br><br><h1><a href='"+res.results[i].sourceUrl+"'>"+res.results[i].title+"</a></h1><br><img src='"+res.results[i].image+"' width='300' /><br>Ready in <b>"+res.results[i].readyInMinutes+" minutes</b><br> <br> " + res.results[i].summary;
    }
    }
    });
    }
    
    