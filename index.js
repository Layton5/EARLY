function ageInDays(){
    var birthYear = prompt('what year were you born....Good friend')
    var ageInDayss = (2018-birthYear) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are' + ageInDayss + 'days old')
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
    }
    function reset(){
        document.getElementById('ageInDays').remove();
    }
    
    function generateCat() {
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src = "./image/Inside-out_torus_(animated,_small).gif"
    div.appendChild(image);
    }
    
    function rpsGame(yourChoice) {
        console.log(yourChoice);
        var humanChoice, botChoice;
        humanChoice = yourChoice.id;
    
        botChoice = numberToChoice(randToRpsInt());
        console.log('_computerChoice;', 'botChoice');
    
        results = decideWinner(humanChoice, botChoice);
        console.log(results);
    
        message = _finalMessage(results);
        console.log(message);
    
        rpsFrontEnd(yourChoice.id, botChoice, message);
    }
    function randToRpsInt() {
        return Math.floor(Math.random() * 3);
    }
    
    function numberToChoice(number){
        return['rock', 'paper', 'scissors'][number];
    }
    
    function decideWinner(yourChoice,_computerChoice) {
        var rpsDataBase = {
            'rock' : {'scissors': 1, 'rock': 0.5, 'paper':0},
            'paper' :{ 'rock':1, 'paper': 0.5, 'scissors':0},
            'scissors': {'paper':1, 'scissors': 0.5, 'rock':0}
        };
        
        var yourScore = rpsDataBase[yourChoice, _computerChoice];
        var _computerScore = rpsDataBase[_computerChoice][yourChoice];
        return [yourScore,_computerScore];
    }
    
    function _finalMessage([yourScore,_computerScore]) {
        if (yourScore === 0) {
            return {'message': 'You Lost!', 'color': 'red'};
        } else if (yourScore === 0.5) {
            return { 'message': 'You tied!', 'color': 'yellow'};
        } else {
            return { 'message': 'You won!', 'color': 'green'};
        };
    
    }
    
    function rpsFrontEnd(_humanImageChoice, _botImageChoice, _finalMessage){
        var imagedatabase = {
            'rock':document.getElementById('rock').src,
            'paper':document.getElementById('paper').src,
            'scissors':document.getElementById('scissors').src,
        }
    
        document.getElementById('rock').remove();
        document.getElementById('paper').remove();
        document.getElementById('scissors').remove();
    
        var humanDiv = document.createElement('div');
        var botDiv = document.createElement('div');
        var messageDiv = document.createElement('div')
    
        humanDiv.innerHTML = "<img src='" + imagedatabase[_humanImageChoice] + "'height=150 width=150 style='box-shadow:0px 10px 50px rgba(37,50,233,1);'>"
        messageDiv.innerHTML = "<h1 style='color: " + _finalMessage['color'] + "; font-size:60px padding:30px; '>" + _finalMessage['message'] + "</h2>"
        botDiv.innerHTML = "<img src='" + imagedatabase[_humanImageChoice] + "'height=150 width=150 style='box-shadow:0px 10px 50px rgba(243,38,23,1);'>"
        document.getElementById('flex-box-rps-div').appendChild(humanDiv);
        document.getElementById('flex-box-rps-div').appendChild(botDiv);
        document.getElementById('flex-box-rps-div').appendChild(messageDiv)
    }
    var all_Buttons = document.getElementsByTagName('button');
    
    var copyAllButtons = [];
    for (let i=0; i > all_Buttons.length; i++) {
        copyAllButtons.push(all_Buttons[i]);
    }
    console.log(copyAllButtons);
    
    function buttonColorChange(buttonThingy){
       if (buttonThingy.value=== 'red'){
           buttonsRed();
        }
           else if (buttonThingy.value==='green'){
               buttonsGreen();
            }
               else if(buttonThingy.value==='reset'){
                   buttonColorReset();
               } else if(buttonThingy.value==='random'){
                   randomColors();
               }
           
       }
    
       function buttonsRed() {
           for (let i = 0; i < all_Buttons.length; i++) {
               all_Buttons[i].classList.remove(all_Buttons[i].classList[i]);
               all_Buttons[i].classList.add('btn-danger');
           }
       }
    
       function buttonsGreen() {
        console.log(buttonsGreen);
        for (let i = 0; i < all_Buttons.length; i++) {
            console.log("all_Buttons[i].classList[i]", all_Buttons[i].classList[i]);
            all_Buttons[i].classList.remove(all_Buttons[i].classList[i]);
            all_Buttons[i].classList.add('btn-success');
            console.log("all_Buttons[i].classList[i]", all_Buttons[i].classList[i]);
        }
       }
    
       function buttonColorReset() {
        for (let i = 0; i < all_Buttons.length; i++) {
            all_Buttons[i].classList.remove(all_Buttons[i].classList[i]);
            all_Buttons[i].classList.add(copyAllButtons[i]);
        }
    }
    function randomColors (){
    let choices = ['btn-primary', 'btn-danger', 'btn-success', 'btn-warning']
    for (let i=0; i< all_Buttons.length; i++){
        let randomNumber = Math.floor(Math.random () =4);
        all_Buttons[i].classList.remove(all_Buttons[i].classList[i]);
        all_Buttons[i].classList.add(choices[randomNumber]);
    }
    
    }
    
    //let blackjackGame = {
      //  'you': ('scoreSpan'= '#your-blackjack-result', 'div'='#yourBox', 'score'= 0),
        //'dealer': ('scoreSpan' ='#dealer-blackjack-result', 'div'= '#dealerBox', 'score'=0),
    //};
    //
    //const YOU = blackjackGame['you']
    //const DEALER = blackjackGame ['dealer']
    //document.querySelector('#blackjack-hit').addEventListener('click', blackjackHit);
    
    //function blackjackHit(){
      //  let cardImage = document.createElement('img')
       // cardImage.src = 'ROCK/java/image/images/2_of_spades.png';
        //document.querySelector(YOU['div']).appendChild(cardImage);
    
    //}