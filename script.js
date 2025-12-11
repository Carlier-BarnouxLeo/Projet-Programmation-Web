//alert("bien relié");

var tab0 = false;
var tab1 = false;
var tab4 = false;
var tab3 = false;


function affichage_tab_prepSc(){
    const tab = document.getElementById('tab_prepSc');

    if (!(tab0)){
        tab.style.display="block";
        tab0 = true;
    }
    else{
        tab.style.display="none";
        tab0 = false;
    }
}

function affichage_tab_prepP(){
    const tab = document.getElementById('tab_prepP');
    
    if (!(tab1)){
        tab.style.display="block";
        tab1 = true;
    }
    else{
        tab.style.display="none";
        tab1 = false;
    }
}

function affichage_tab_prepBN(){
    const tab = document.getElementById('tab_prepBN');
    
    if (!(tab4)){
        tab.style.display="block";
        tab4 = true;
    }
    else{
        tab.style.display="none";
        tab4 = false;
    }
}

function affichage_tab_cycleI(){
    const tab = document.getElementById('tab_InfoCycI');
    const tab2 = document.getElementById('tab_filiereCycI');

    if (!(tab3)){
        tab.style.display="block";
        tab2.style.display="block";
        tab3 = true;
    }
    else{
        tab.style.display="none";
        tab2.style.display="none";
        tab3 = false;
    }
}
