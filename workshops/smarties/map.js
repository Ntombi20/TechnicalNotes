var smarties = {};

if (smarties['blue'] === undefined){
	console.log('not there')
}
else{
	console.log('yes!!')
}

smarties['blue'] = 9;
smarties['green'] = 25;

if (smarties['blue'] === undefined){
	console.log('not there')
}
else{
	console.log('yes : ' + smarties.blue)
}

if (smarties['green'] === undefined){
	console.log('not there')
}
else{
	console.log('yes green : ' + smarties.green)
}