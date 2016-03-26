// SET UP inList VARIABLE (Boolean)
var inList = false;
// SET UP myVeg VARIABLE (String)
var myVeg = "";

// == TO DO == 
//SET UP THE ORIGINAL ARRAY - CALL IT vegetables
var vegetables = ['squash', 'green beans', 'carrots', 'celery'];

// LOG THE CURRENT LENGTH OF THE ARRAY
console.log(vegetables.length);

// ADD A NEW VEGETABLE WITH push()
// NOTICE LOG OUTPUT'S THE ARRAY'S NEW LENGTH
console.log(vegetables.push('asparagus'));

// LOG CURRENT ARRAY
console.log(vegetables);

function display(){
	for(var i = 0; i < vegetables.length; i++){
		$('#veg_list').append('<li>' + vegetables[i] + '</li>' );
	// == TO DO == 
	//LOOP THROUGH vegetables ARRAY TO DISPLAY CURRENT LIST OF VEGETABLES
	// HINT - each vegetable can live in a <li> inside the existing ul#veg_list
	// HINT HINT - you can use the .append() method to do this
    }
}

// CALL DISPLAY RIGHT AWAY
display();

$('#test').click(function(){
	//console.log('test works');
	// TEST EACH VEGETABLE TO SEE IF IT MATCHES INPUT

	//SET myVeg EQUAL TO THE value OF #test_veg
	myVeg = $('#test_veg').val();
	// LOG myVeg TO MAKE SURE
	console.log(myVeg);

	// LOOP THROUGH vegetables ARRAY - TEST TO SEE IF input VEGETABLE is in
	// vegetables ARRAY
	for(var i = 0; i < vegetables.length; i++){
		if(vegetables[i] === myVeg){
			inList = true;
			test();
			return;
		}else{
			inList = false;
			test();
		}
	}
});

// IF INPUT VEGETABLE IS IN THE LIST, SAY SO
function test(){
	console.log('test works');
	if(inList === true){
		$('#output').html(myVeg + " is in the list");
	}else{
		$('#output').html(myVeg + " is NOT in the list");
	}
}

// CLICK TO PUSH NEW VEGETABLES INTO ARRAY FROM INPUT
$('#add').click(function(){
	// == TO DO ==
	// PUSH #add_veg ELEMENT'S value INTO THE ARRAY
	vegetables.push($('#add_veg').val());
	
	
	// DISPLAY THE FULL NEW ARRAY
	$('#veg_list').html('');
	display();
});

