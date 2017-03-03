
/* Pseudo Coding

button starts the game with countdown timer.
	* Game initializes
	* timer gets set and starts

viewer answers questions (only 1 answer per question) capture those answers.
	* user answers questions
	
game ends when viewer answers all the questions and clicks the done button within time limit or time runs out.
	* on button click checks answers
	* timers runs out checks answers
	* games ends

display the results to the user of the quantity of correct, incorrect and 
unanswered questions and win/lose message.
	* displays results of wins
	* displays results of losses
	* displays results of unanswered
	* displays win/lose message or images (maybe)
	* plays audio on win or lose (maybe)

*/

    var wins = 0;
	var losses = 0;
    var winAudio = new Audio('assets/audio/win.wav');
    var loseAudio = new Audio('assets/audio/lose.wav');
	
	
	var iqac [{
		id: "qa1",
		question: "",
		answer: ["", "", "", ""],	
		correctAnswer: ""
		
	}, {
		id: "qa2",
		question: "",
		answer: ["", "", "", ""],
		correctAnswer: ""
	}, {
		id: "qa3",
		question: "",
		answer: ["", "", "", ""],
		correctAnswer: ""
	}, {
		id: "qa4",
		question: "",
		answer: ["", "", "", ""],
		correctAnswer: ""
	}, {
		id: "qa5",
		question: "",
		answer: ["", "", "", ""],
		correctAnswer: ""
	}, {
		id: "qa6",
		question: "",
		answer: ["", "", "", ""],
		correctAnswer: ""
	}, {
		id: "qa7",
		question: "",
		answer: ["", "", "", ""],
		correctAnswer: ""
	}, {
		id: "qa8",
		question: "",
		answer: ["", "", "", ""],
		correctAnswer: ""
	}, {
		id: "qa9",
		question: "",
		answer: ["", "", "", ""],
		correctAnswer: ""
	}, {
		id: "qa10",
		question: "",
		answer: ["", "", "", ""],
		correctAnswer: ""
	}]

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	