var total=0;
var NValue=0;
var mediaValue=0;
/*

document.onkeydown = keyDown;

function keyDown(e){
	if (!ie) {var keyCode=e.which;}
	if (ie) {var keyCode=event.keyCode;}
	if((keyCode==115)||(keyCode==83)){somma();}
	if((keyCode==109)||(keyCode==77)){media();}
    
*/

function somma(){
    var NewNumber = document.forMedia.Number.value;
    NewNumber = parseInt(NewNumber);
    total += NewNumber;
    NValue += +1;
    document.forMedia.Number.value = null;

}

function media()
{
    if ((total == 413)&&(NValue == 8))
    {
        alert("Everybody loves Easter Eggs!");
        window.open("http://www.xkcd.com/413");
    }
    
    else if (total>=1){
        mediaValue = (total/NValue);
        mediaValue = parseFloat(mediaValue);
        alert("La media tra i valori è: "+mediaValue);
    }
    
    else{alert("Inserisci almeno un numero! STOLTO!");}
    
    total = 0;
    NValue = 0;
}

function lastvalue()
{
    
}