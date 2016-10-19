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



this.cards = new Array();
this.create = deckCreate;
this.shuffle = deckShuffle;
this.draw = deckDraw;

deckCreate();


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
	    k = Math.floor(Math.random() * this.cards.length);
		temp = this.cards[j];
		this.cards[j] = this.cards[k];
		this.cards[k] = temp;	
		}
	console.log("shuffled");
	}
	
function deckDraw(){
	deckShuffle();
	console.log(this.cards[0]);
	var selectedSpread = $("#spread option:selected").text();
	switch(selectedSpread){
		case "The Trinity":
			$("#past").attr("src", "cardart/" + this.cards[0] + ".png");
			this.cards.shift();
			$("#present").attr("src", "cardart/" + this.cards[0] + ".png");
			this.cards.shift();
			$("#future").attr("src", "cardart/" + this.cards[0] + ".png");
			this.cards.shift();
			break;
		default:
			break;
		}
	}