
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

 
	
	var iqac = [{
		id: "qa1",
		question: "This is a type of semiconductor in which the flow of current can be controlled through a base or gate terminal. It is usually used for electronic switching or amplifiers.",
		answer: ["varistor", "diode", "transistor", "resistor"],	
		correctAnswer: "transistor"
		
	}, {
		id: "qa2",
		question: "This consists of an electromagnet, which is used to open or close a contact(s). It is used in switching that requires isolation or high power.",
		answer: ["relay", "transistor", "rheostat", "inductor"],
		correctAnswer: "relay"
	}, {
		id: "qa3",
		question: "This is a type of semiconductor that only allows current to flow in one direction. It is usually used to rectify AC signals (conversion to DC).",
		answer: ["diode", "transformer", "univac", "inductor"],
		correctAnswer: "diode"
	}, {
		id: "qa4",
		question: "This can consist of a simple wire wound into a helix. It developes a magnetic field when current passes through it. It is also used in tuning circuits and filters. This one passes DC and blocks AC.",
		answer: ["semiconductor", "capacitor", "inductor", "transistor"],
		correctAnswer: "inductor"
	}, {
		id: "qa5",
		question: "This consists of two plates separated by a dielectric and can store a charge. Useful in tuning and filtering circuits, it blocks DC while passing AC.",
		answer: ["inductor", "capacitor", "transistor", "relay"],
		correctAnswer: "capacitor"
	}, {
		id: "qa6",
		question: "Made from a variety of materials, such as carbon, this inhibits the flow of current.",
		answer: ["inductor", "resistor", "capacitor", "choke"],
		correctAnswer: "resistor"
	}, {
		id: "qa7",
		question: "This is a type of display that uses tiny polarized crystals that align when current is passed through them. Used in conjuction with a polarized lens they darken when energized. They are very popular in watches, calculators, and lap-tops.",
		answer: ["LED", "LCD", "CRT", "Quartz Crystal"],
		correctAnswer: "LCD"
	}, {
		id: "qa8",
		question: "This is a special type of diode that lights up when a small voltage is applied. They are usually used as indicators or in numerical or alphanumerical displays.",
		answer: ["Zener diode", "incandescent lamp", "LCD", "LED"],
		correctAnswer: "LED"
	}, {
		id: "qa9",
		question: "This is a special type of diode that breaks down when a critical reverse voltage is applied. It is most commonly used to regulate voltage.",
		answer: ["transistor", "Zener diode", "anode", "LED"],
		correctAnswer: "Zener diode"
	}, {
		id: "qa10",
		question: "This consists of usually two coil windings which usually share a magnetic core. It is used to convert an AC source or signal into another AC source or signal with the same power (ideally) but different voltage and current.",
		answer: ["transformer", "relay", "transistor", "choke"],
		correctAnswer: "transformer"
	}];

	
	

	
	
	
	
	
	
	
	
	
	
	
	
	