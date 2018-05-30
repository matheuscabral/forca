window.onload = init;

var buton;
var texto;
var palavra=["aviao","sapo","buraco","italia","urso"];
var nLetra
var jogo;
var nErros=0;
var nAcertos=0;
var resposta=new Array();
var acerto=0;
var tamResp;

function init(){
	var c = Math.floor((Math.random()*palavra.length));
	jogo=palavra[c];
	console.log(jogo);
	nLetra=jogo.length
	for(var i=0;i<(nLetra);i++){
		resposta[i]="_";
	}
	document.getElementById('resp').innerHTML=resposta;
	tamResp=nLetra+(nLetra-1);
	buton=document.getElementById('enviar');
	buton.addEventListener('click',busca);
}

function busca(event){
	if(resposta.length!=nErros){
		if(nErros<=6){
			letra=document.getElementById("letra").value;
			for(var i=0;i<nLetra;i++){
				if(letra==jogo[i]){
					resposta[i]=letra;
					acerto=1;
				}
			}
			if(acerto!=1){
				nErros=nErros+1;
				alert(nErros);
				document.getElementById("imag").src=nErros+".png";
			}else{
				document.getElementById('resp').innerHTML=resposta;
				nAcertos=nAcertos+1;
			}
			acerto=0;
		}if(nErros==6){
			document.getElementById("msg").innerHTML="Voce Perdeu! Aperte f5 para jogar de novo";
		}
	}
	if(nAcertos==resposta.length){
		document.getElementById("msg").innerHTML="Voce Ganho! Aperte f5 para jogar de novo";
	}
}
