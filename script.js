let beers = [];

const addBeer = (name, category, rating) => {
    let beersObj = {
        beerName: name, 
        beerCat: category,
        beerRat: rating
        };
    beers.push(beersObj);
}

const renderBeers = () => {
    $(".beers-list").empty();
    for(let i in beers){
        $(".beers-list").append("<li>" + beers[i].beerName +" "+ beers[i].beerCat +  " " + beers[i].beerRat + "</li>");
    }
};

const sortBeers = function() {
    beers.sort(function(a, b) { 
     return a.beerRat - b.beerRat;
 });
}

const sortBeersRev = function() {
    beers.sort(function(a, b) { 
     return a.beerRat + b.beerRat;
 });
}

$(".post-beer").click( function() {
        var beerEntered = $(".beer-input").val();
        var catEntered = $(".category-input").val();
        var ratEntered = $(".rating").val();
            if(ratEntered === "Select"){
                alert("Please rate your favorite beer");
                return 0;
            }

        addBeer(beerEntered, catEntered, ratEntered);
        renderBeers();
    }
);

var clicked = 0;
$(".sort-beer").click(function(){
  
    if(clicked === 0){
        sortBeers();
        clicked = 1;
    } else if(clicked === 1){
        sortBeersRev();
        clicked = 0;
    }

renderBeers();
});




