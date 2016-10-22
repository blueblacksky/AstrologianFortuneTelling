/*

The MIT License (MIT)

Copyright (c) 2016 thevampirelematt

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
this.create = deckCreate;
this.shuffle = deckShuffle;
this.draw = deckDraw;

deckCreate();

/*CONSTANTS*/
const REVERSE_CHANCE = 45;
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
	
	if(this.cards.length === 0){
		deckCreate();
		}
		
	for (j = 0; j < this.cards.length; j++){
	    k = j + Math.floor(Math.random() * (this.cards.length - j));
		temp = this.cards[j];
		this.cards[j] = this.cards[k];
		this.cards[k] = temp;	
		}
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
}

function hideSpreads(){
	var selectedSpread = $("#spread option:selected").val();
	if(selectedSpread != "trinity"){
		$("#trinity").css("display","none");
	}
	if(selectedSpread != "dawnCross"){
	$("#dawnCross").css("display","none");
	}
}