var starters=[{
		name:"Fried Dill Pickles",
		description:"Apricot Sauce",
		price:"$5.00"
	},
	{
		name:"Loaded Tots",
		description:"Pimento cheese, applewood smoked bacon, scallions, buttermilk ranch",
		price:"$7.00"
	},
	{
		name:"Grilled Veggie Skewers",
		description:"Squash, zucchini, red peppers, carrots, grape tomatoes, red onions.",
		price:"$5.50"
	},
	{
		name:"Devilled Eggs",
		description:"Cheddar, applewood smoked bacon.",
		price:"$6.00"		
	}]
	


var salads=[
	{
		name:"Simple Salad",
		description:"Organic mixed greens, cucumbers, carrot strings, red onion, tomatoes, choice of dressing. Add grilled chicken $4.00",
		price:"$4.00"
	},
	{
		name:"The Kale Salad",
		description:"Kale, feta, dried cranberries, almonds, tossed with lemon vinaigrette. Add grilled chicken $4.00.",
		price:"$9.00"
	},
	{
		name:"Steakhouse Salad",
		description:"Grilled skirt steak, aged parmesan, baby spinach, roasted grape tomatoes, grilled red onions, sunny side up egg, lemon vinaigrette.",
		price:"$17.00"
	}
]

var burgers=[
	{
		name:"The Counter Burger",
		description:"All natural beef, provolone, tomatoes, lettuce blend, fried onion strings, sauteed mushrooms, garlic aioli, brioche bun.",
		price:"$12.50"
	},
	{
		name:"Old School Burger",
		description:"All natural beef, tillamook cheddar, lettuce blend, tomatoes, red onions, pickles, the counter relish, brioche bun.",
		price:"$10.00"
	},
	{
		name:"Sprouted Veggie Burger",
		description:"Housemade vegan veggie, organic mixed greens, red onions, roasted red peppers, alfalfa sprouts, dijon balsamic, multigrain bun.",
		price:"$10.00"
	}
]


var menu=[starters,salads,burgers]
// <div class="panel-heading" role="tab" id="headingOne">
//                           <h4 class="panel-title">
//                             <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
//                               Collapsible Group Item #1
//                             </a>
//                           </h4>
//                         </div>
//                         <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
//                           <div class="panel-body">
//                             <ul>
//                                 <li><h5>ASDAKSDAKD</h5></li>
//                                 <li><p class="desc-text">sdfsdfdsfdsfdsfsffdsfsfdsfsfsfdsdfsf</p></li>
//                                 <li>Price:$5.00</li>

//                             </ul>
//                           </div>
//                         </div>

function getStarters(){
	starterHTML=""
	for(i in starters){
		starterHTML+="<li><h4>"+starters[i].name+"</h4><br><p class=\"food-desc\">"+starters[i].description+"</p><br>Price:"+starters[i].price+"</li>"
	}
	document.getElementById('starterList').innerHTML=starterHTML
}

function getBurgers(){
	burgerHTML=""
	for(i in burgers){
		burgerHTML+="<li><h4>"+burgers[i].name+"</h4><br><p class=\"food-desc\">"+burgers[i].description+"</p><br>Price:"+burgers[i].price+"</li>"
	}
	document.getElementById('burgerList').innerHTML=burgerHTML
}

function getSalads(){
	saladHTML=""
	for(i in salads){
		saladHTML+="<li><h4>"+salads[i].name+"</h4><br><p class=\"food-desc\">"+salads[i].description+"</p><br>Price:"+salads[i].price+"</li>"
	}
	document.getElementById('saladList').innerHTML=saladHTML
}