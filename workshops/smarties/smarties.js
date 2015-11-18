var findSmartiesByColor = function(smarties, color){
	var orangeSmarty= {};
	for(var index in smarties){ 
      if (smarties[index].color === color)
      	orangeSmarty = smarties[index];
	}
       return orangeSmarty;
};
    

var findMostAbundantSmartie = function(smarties){
     var mostAbundantSmartie = {color: '', qty: 0};
     console.log(smarties.length);
     for(var i = 0; i < smarties.length; i++){
        if(smarties[i].qty > mostAbundantSmartie.qty){
        	mostAbundantSmartie = smarties[i];
        }
    }
            return mostAbundantSmartie;

};

var findSmartiesLessThan = function(smarties, num){
    var maxQty = 7;
    var lessThan = [];
    for(var value in smarties){
    if(smarties[value].qty < maxQty) {
    	lessThan.push(smarties[value].qty);
    }
}
    return lessThan;
};

var findSmarties = function(smarties, func){
var smartyList = [];
for(var i=0; i < smarties.length; i++){
  func(smarties[i]);
  console.log(func(smarties[i]));
    if(func(smarties[i]) === true){
    smartyList.push(smarties[i]);
  } 
}
return smartyList;
};

var groupSmarties = function(smartyList){
    var smarties = {};
    for(var index in smartyList){
        var smarty = smartyList[index];
        console.log(smarty);
        //check if the color of the smarty is in the map
        if (smarties[smarty.color] == undefined){
            smarties[smarty.color] = 0; 
        }
      smarties[smarty.color]++; 
 }
    return smarties;
};

var sortSmarties = function(){

};

var addTotalForTeams = function(){

};
