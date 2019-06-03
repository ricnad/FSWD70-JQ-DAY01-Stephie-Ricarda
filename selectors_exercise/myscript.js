/*
 * My jQuery selectors
 *
 * Apply a style such as a yellow background to the following elements.
 * Test your selectors one at a time.
 */

// all elements
	// $("*").css("background-color", "yellow"); //

// all p elements

	//$("p").css("background-color","yellow"); //


// the p element with an ID of "intro"

	// $("#intro").css("background-color","yellow"); //


// all elements with a class of "note"

	// $(".note").css("background-color","yellow"); //


// all DIV elements with a class of note

	// $("div.note").css("background-color","yellow"); //solved


// all p elements in the article element

	// $("article p").css("background-color","yellow"); // solved


// the last element in any section which is a p tag

	// $("p:last").css("background-color","yellow"); // solved


// the first paragraph on the page

	// $("p:first").css("background-color","yellow"); // solved 


// all p elements which have a link

	// $("footer p").css("background-color","yellow"); //solved 
	$("p [href]").css("background-color","yellow"); //solved


// the second li within nested ul element

	 $("ul li:eq(1)").css("background-color","yellow"); //solved


// every second and third p element

	$("p:nth-of-type(2)").css("background-color","yellow");  //solved 
	// $("p:nth-of-type(3)").css("background-color","yellow"); // solved 
