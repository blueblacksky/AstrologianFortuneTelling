/*

The MIT License (MIT)

Copyright (c) 2016-2020 thevampirelematt

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/

/*CREATING DECK*/
this.cards = new Array();
deckCreate();
/*/Creating Deck*/

/*CONSTANTS*/
const REVERSE_CHANCE = 45;

const TRINITY_LORE = "\tPerhaps the most employed spread is a basic three-card spread, oft referred to as the Trinity. The arcana are shuffled and then three are drawn from the pile and placed face down in a row \u2013 the first to the left, the second to the right, and the third twixt the previous two, slightly raised. The cards are then turned in the order they were placed, the first representing the subject\u2019s past, the second, her present, and the third, her future.";
const DAWN_CROSS_LORE = "\tThe Dawn Cross uses all six of the major arcana and is believed to provide more detailed information regarding a subject\u2019s fate. The cards are shuffled and drawn one at a time.\r\n\r\n\tThe first card drawn is placed face up in the scrying table\u2019s center. This card is also known as the \u201Ccore\u201D and represents the subject\u2019s present state.\r\n\r\n\tThe second card is placed immediately to the core\u2019s left and represents what, in the past, has exerted influence over the subject.\r\n\r\n\tThe third card is placed immediately to the right of the core and represents what will most affect the subject in the near future.\r\n\r\n\tThe fourth card is placed below the core, with the fifth card placed immediately below that one. These cards represent misfortune the subject may face in the foreseeable future and the root of that misfortune respectively.\r\n\r\n\tThe sixth and final card is placed directly above the core to form the cross, and is representative of the subject\u2019s overall fortune.";
const SEERS_GAZE_LORE = "\tThe Seer\'s Gaze is an obscure spread. All six major arcana are shuffled and laid out in a row. Only two cards are turned face up, the rest remain face down.\r\n\t\t\t\t\r\n\tThe first card chosen is called the Firmament, it represents the subject\'s current place in the weave of fate.\r\n\t\t\t\t\r\n\tThe second card chosen is called the Intention, it represents the desires of both the reader and the subject.\r\n\t\t\t\t\r\n\tTogether the Firmament and the Intention provide insight into the subject\'s immediate situation and near future. The Seer\'s Gaze is believed to invite visions and in some circles is considered a charlatan\'s game. The validity of this spread perhaps hinges on the Astrologian that reads it.";

/*/Constants*/

function deckCreate(){
	var majorArcana = new Array("Balance", "Bole", "Arrow", "Spear", "Ewer", "Spire");
	var i;
	
	for (i = 0; i < majorArcana.length; i++)
		this.cards[i] = majorArcana[i];
	
	}
	
function deckShuffle(){
	var j, k;
	var temp;
	
	this.cards.length = 0;
	deckCreate();

		
	for (j = 0; j < this.cards.length; j++){
	    k = j + Math.floor(Math.random() * (this.cards.length - j));
		temp = this.cards[j];
		this.cards[j] = this.cards[k];
		this.cards[k] = temp;	
		}
	}

function initiateTrinity(){
	$("#trinityCard1").flip();
	$("#trinityCard2").flip();
	$("#trinityCard3").flip();
	}
	
function initiateDawn(){
	$("#dawnCard1").flip();
	$("#dawnCard2").flip();
	$("#dawnCard3").flip();
	$("#dawnCard4").flip();
	$("#dawnCard5").flip();
	$("#dawnCard6").flip();
	}
	
function initiateGaze(){
	$(".gazeCard").flip({
		trigger: 'manual'
		});
	$(".gazeCard").click(function() {
		seersGazeFlipper(this.id);
		});
	}

function cardReverse(){
	if($("#reverse").is(':checked')){
		var randomNum = Math.random() * (100-0) - 0;
		return randomNum <= REVERSE_CHANCE;
		}
	else{
		return false;
		}
	}
	
function deckDraw(){
	deckShuffle();
	resetCards();
	setTimeout(hideSpreads, 400);
	setTimeout(applySpread, 400);
	}

function applySpread(){
	var selectedSpread = $("#spread option:selected").val();
	$("#"+selectedSpread+"").css("display","inline-block")
	switch(selectedSpread){
		case "trinity":			
			$("#trinityPast").attr("src", "cardart/" + this.cards[0] + ".png");
			if(cardReverse()){
				$("#trinityPast").addClass('reversed');
				}
			else{
				$("#trinityPast").removeClass('reversed');
				}
			this.cards.shift();
			$("#trinityPresent").attr("src", "cardart/" + this.cards[0] + ".png");
			if(cardReverse()){
				$("#trinityPresent").addClass('reversed');
				}
			else{
				$("#trinityPresent").removeClass('reversed');
				}
			this.cards.shift();
			$("#trinityFuture").attr("src", "cardart/" + this.cards[0] + ".png");
			if(cardReverse()){
				$("#trinityFuture").addClass('reversed');
				}
			else{
				$("#trinityFuture").removeClass('reversed');
				}
			this.cards.shift();
			loreFiller(TRINITY_LORE);	
			break;
		case "dawnCross":
			$("#core").attr("src", "cardart/" + this.cards[0] + ".png");
			if(cardReverse()){
				$("#core").addClass('reversed');
				}
			else{
				$("#core").removeClass('reversed');
				}
			this.cards.shift();
			$("#dawnPast").attr("src", "cardart/" + this.cards[0] + ".png");
			if(cardReverse()){
				$("#dawnPast").addClass('reversed');
				}
			else{
				$("#dawnPast").removeClass('reversed');
				}
			this.cards.shift();
			$("#dawnFuture").attr("src", "cardart/" + this.cards[0] + ".png");
			if(cardReverse()){
				$("#dawnFuture").addClass('reversed');
				}
			else{
				$("#dawnFuture").removeClass('reversed');
				}
			this.cards.shift();
			$("#misfortune").attr("src", "cardart/" + this.cards[0] + ".png");
			if(cardReverse()){
				$("#misfortune").addClass('reversed');
				}
			else{
				$("#misfortune").removeClass('reversed');
				}
			this.cards.shift();	
			$("#root").attr("src", "cardart/" + this.cards[0] + ".png");
			if(cardReverse()){
				$("#root").addClass('reversed');
				}
			else{
				$("#root").removeClass('reversed');
				}
			this.cards.shift();
			$("#fortune").attr("src", "cardart/" + this.cards[0] + ".png");
			if(cardReverse()){
				$("#fortune").addClass('reversed');
				}
			else{
				$("#fortune").removeClass('reversed');
				}
			this.cards.shift();
			loreFiller(DAWN_CROSS_LORE);
			break;
		case "gaze":
			$("#gaze1").attr("src", "cardart/" + this.cards[0] + ".png");
			if(cardReverse()){
				$("#gaze1").addClass('reversed');
				}
			else{
				$("#gaze1").removeClass('reversed');
				}
			this.cards.shift();
			$("#gaze2").attr("src", "cardart/" + this.cards[0] + ".png");
			if(cardReverse()){
				$("#gaze2").addClass('reversed');
				}
			else{
				$("#gaze2").removeClass('reversed');
				}
			this.cards.shift();
			$("#gaze3").attr("src", "cardart/" + this.cards[0] + ".png");
			if(cardReverse()){
				$("#gaze3").addClass('reversed');
				}
			else{
				$("#gaze3").removeClass('reversed');
				}
			this.cards.shift();
			$("#gaze4").attr("src", "cardart/" + this.cards[0] + ".png");
			if(cardReverse()){
				$("#gaze4").addClass('reversed');
				}
			else{
				$("#gaze4").removeClass('reversed');
				}
			this.cards.shift();
			$("#gaze5").attr("src", "cardart/" + this.cards[0] + ".png");
			if(cardReverse()){
				$("#gaze5").addClass('reversed');
				}
			else{
				$("#gaze5").removeClass('reversed');
				}
			this.cards.shift();
			$("#gaze6").attr("src", "cardart/" + this.cards[0] + ".png");
			if(cardReverse()){
				$("#gaze6").addClass('reversed');
				}
			else{
				$("#gaze6").removeClass('reversed');
				}
			this.cards.shift();
			loreFiller(SEERS_GAZE_LORE);		
			break;
		default:
			break;
		}
}
	
function resetCards(){
	var card;
	card = $("#trinityCard1").data("flip-model");
	if(card.isFlipped){
		$("#trinityCard1").flip('toggle');
	}
	card = $("#trinityCard2").data("flip-model");
	if(card.isFlipped){
		$("#trinityCard2").flip('toggle');
	}
	card = $("#trinityCard3").data("flip-model");
	if(card.isFlipped){
		$("#trinityCard3").flip('toggle');
	}
	card = $("#dawnCard1").data("flip-model");
	if(card.isFlipped){
		$("#dawnCard1").flip("toggle");
	}
	card = $("#dawnCard2").data("flip-model");
	if(card.isFlipped){
		$("#dawnCard2").flip("toggle");
	}
	card = $("#dawnCard3").data("flip-model");
	if(card.isFlipped){
		$("#dawnCard3").flip("toggle");
	}
	card = $("#dawnCard4").data("flip-model");
	if(card.isFlipped){
		$("#dawnCard4").flip("toggle");
	}
	card = $("#dawnCard5").data("flip-model");
	if(card.isFlipped){
		$("#dawnCard5").flip("toggle");
	}
	card = $("#dawnCard6").data("flip-model");
	if(card.isFlipped){
		$("#dawnCard6").flip("toggle");
	}	
	card = $("#gazeCard1").data("flip-model");
	if(card.isFlipped){
		$("#gazeCard1").flip("toggle");
	}	
	card = $("#gazeCard2").data("flip-model");
	if(card.isFlipped){
		$("#gazeCard2").flip("toggle");
	}
	card = $("#gazeCard3").data("flip-model");
	if(card.isFlipped){
		$("#gazeCard3").flip("toggle");
	}
	card = $("#gazeCard4").data("flip-model");
	if(card.isFlipped){
		$("#gazeCard4").flip("toggle");
	}
	card = $("#gazeCard5").data("flip-model");
	if(card.isFlipped){
		$("#gazeCard5").flip("toggle");
	}
	card = $("#gazeCard6").data("flip-model");
	if(card.isFlipped){
		$("#gazeCard6").flip("toggle");
	}
}

function hideSpreads(){
	var selectedSpread = $("#spread option:selected").val();
	if(selectedSpread != "trinity"){
		$("#trinity").css("display","none");
	}
	if(selectedSpread != "dawnCross"){
	$("#dawnCross").css("display","none");
	}
	if(selectedSpread != "gaze"){
	$("#gaze").css("display","none");
	}
}

function setSeersGazeOnDone(){
	$("#gazeCard1").on('flip:done',function(){
		seersGazeLimiter();
	});
	$("#gazeCard2").on('flip:done',function(){
		seersGazeLimiter();
	});
	$("#gazeCard3").on('flip:done',function(){
		seersGazeLimiter();
	});
	$("#gazeCard4").on('flip:done',function(){
		seersGazeLimiter();
	});
	$("#gazeCard5").on('flip:done',function(){
		seersGazeLimiter();
	});
	$("#gazeCard6").on('flip:done',function(){
		seersGazeLimiter();
	});
}


function seersGazeFlipper(e){
	var seerFlipped = 0;
	var card;
	
	card = $("#gazeCard1").data("flip-model");
	if(card.isFlipped){
		seerFlipped++;
	}
	card = $("#gazeCard2").data("flip-model");
	if(card.isFlipped){
		seerFlipped++;
	}
	card = $("#gazeCard3").data("flip-model");
	if(card.isFlipped){
		seerFlipped++;		
	}
	card = $("#gazeCard4").data("flip-model");
	if(card.isFlipped){
		seerFlipped++;		
	}
	card = $("#gazeCard5").data("flip-model");
	if(card.isFlipped){
		seerFlipped++;		
	}
	card = $("#gazeCard6").data("flip-model");
	if(card.isFlipped){
		seerFlipped++;		
	}
	
	if(seerFlipped <= 1){
		$("#"+ e).flip('toggle');
	}
}

function loreFiller(e){
	var textArea = $("#lore");
	textArea.css('display', 'inline')
	textArea.val('');
	textArea.val(e);
	}
