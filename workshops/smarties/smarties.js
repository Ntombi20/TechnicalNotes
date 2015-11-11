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

var findSmarties = function(){

};

var groupSmarties = function(){

};

var sortSmarties = function(){

};

var addTotalForTeams = function(){

};
