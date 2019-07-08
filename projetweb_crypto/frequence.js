
	var clair=document.getElementById("lg_en_clair")
	
	var calcul_frequence=document.getElementById("calcul_frequence")


var Liste=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var Long_liste=Liste.length;
for (var i =0;i<Long_liste; i++) {
	var case_clair=document.createElement("td");
	case_clair.innerText=Liste[i];
	clair.appendChild(case_clair);
}

function frequence_lettre(){
var texte=document.getElementById("texte_frequence").value.toUpperCase();
var liste_stat="";
for (var i=0;i<=26;i++){
	liste_stat[i]=0;
	}
var liste_freq="";
for (var i=0;i<=26;i++){
	liste_freq[i]=0;
	}
var L=texte.length;
for (i=0;i<L; i++){
	var lettre=lettre[i];
	k=lettre.charCodeAt(0)-65;
	if (k=0; k<=26;k++){
		liste_stat[k]=liste_stat[k]+1;
		}
	for (var i=0;i<=26;i++){
		liste_freq[i]=(liste_stat[i]/L*100).tofixed(2);
		}
	}
}