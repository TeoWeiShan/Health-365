function getrecepe(q){
    $.ajax({
    url:"https://api.spoonacular.com/recipes/complexSearch?apiKey=db254b5cd61744d39a2deebd9c361444&addRecipeNutrition=true&query="+q,
    success: function(res) {
      
    document.getElementById("output").innerHTML = "";
    for (var i=0; i<res.results.length;i++){
    document.getElementById("output").innerHTML+= 
    
    "<h1>"+res.results[i].title+"</h1><br><img src='"+res.results[i].image+"' width='300' /><br>Ready in "+res.results[i].readyInMinutes+" minutes <br> Link to recipe: <a href='"+ res.results[i].sourceUrl+"'>Recipe Link </a> <br> "+res.results[i].nutrition.nutrients[0].title +": " +res.results[i].nutrition.nutrients[0].amount;
    }
    }
    });
    }
    
    