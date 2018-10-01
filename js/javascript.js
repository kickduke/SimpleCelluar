//声明变量
var eleg0 = document.getElementById("gene0");
var len = eleg0.innerHTML.length;
var gene0 = "";
var gene1 = "";
var evoTimes = 100;
var Rules = {rule1:"■■■",value1:"",rule2:"□□□",value2:"",rule3:"■■□",value3:"",rule4:"□□■",value4:""
            ,rule5:"■□■",value5:"",rule6:"□■□",value6:"",rule7:"■□□",value7:"",rule8:"□■■",value8:""};

function getRules() {
	var r = 0;
	var r1 = document.getElementsByName("r1"); 
	for(r = 0; r< r1.length; r++) {
		if(r1[r].checked) {
			Rules.value1 = r1[r].value;
		}
	}

	var r2 = document.getElementsByName("r2"); 
	for(r = 0; r< r2.length; r++) {
		if(r2[r].checked) {
			Rules.value2 = r2[r].value;
		}
	}
	
	var r3 = document.getElementsByName("r3"); 
	for(r = 0; r< r3.length; r++) {
		if(r3[r].checked) {
			Rules.value3 = r3[r].value;
		}
	}
	
	var r4 = document.getElementsByName("r4"); 
	for(r = 0; r< r4.length; r++) {
		if(r4[r].checked) {
			Rules.value4 = r4[r].value;
		}
	}
	
	var r5 = document.getElementsByName("r5"); 
	for(r = 0; r< r5.length; r++) {
		if(r5[r].checked) {
			Rules.value5 = r5[r].value;
		}
	}
	
	var r6 = document.getElementsByName("r6"); 
	for(r = 0; r< r6.length; r++) {
		if(r6[r].checked) {
			Rules.value6 = r6[r].value;
		}
	}
	
	var r7 = document.getElementsByName("r7"); 
	for(r = 0; r< r7.length; r++) {
		if(r7[r].checked) {
			Rules.value7 = r7[r].value;
		}
	}

	var r8 = document.getElementsByName("r8"); 
	for(r = 0; r< r8.length; r++) {
		if(r8[r].checked) {
			Rules.value8 = r8[r].value;
		}
	}	
}

function validInputNumber(elm) {
	var x = elm.value;
	if(x == null || x == "" || isNaN(x)) {
		return false;
	}else {
		return true;
	}
}

function createGene0(len) {
	let i = 0;
	var gene_new = "";
	for(i = 0; i< len; i++) {
		if(Math.random() >= 0.5) {
			gene_new = gene_new + "■";
		}else {
			gene_new = gene_new + "□";
		}
	}
	return gene_new;
}

function createGraph() {
	//初始化
	var i = 0;
    var j = 0;
	var elm_div1 = document.getElementsByClassName("div1");
	var elm_div0_i1 = document.getElementById("div0_i1");
	var elm_div0_i2 = document.getElementById("div0_i2");   

    //清空演化图
    var epn = eleg0.nextElementSibling;
    while(epn != null) {
    	elm_div1[0].removeChild(epn);
    	epn = eleg0.nextElementSibling;
    }
    
	//输入校验
	console.log("valid1="+validInputNumber(elm_div0_i1) + " valid2="+validInputNumber(elm_div0_i2));
	if(!validInputNumber(elm_div0_i1) || !validInputNumber(elm_div0_i2)) {
		alert("输入数字非法，请检查");
		return false;
	}
	
	getRules();
	
    len = Number(elm_div0_i1.value);
    gene0 = createGene0(len);
    eleg0.innerHTML = gene0;
    evoTimes = Number(elm_div0_i2.value);
    
    //生成演化图
    for(i = 0; i < evoTimes; i++) {
	    var p = document.createElement("p");
	    gene1 = "";
	    for(j = 0; j < len; j++){
	        gene1 = gene1+cellEvo(j,gene0);
        }
        elm_div1[0].appendChild(p);
        p.innerHTML = gene1;
        gene0 = gene1;
    }
}

function cellEvo(c,cells){
	var newCell = "";
	var tricell = "";
	if(c == 0) {
		tricell = cells[len-1] + cells[c] + cells[c+1];
	}else if(c > 0 && c < len-1) {
		tricell = cells[c-1] + cells[c] + cells[c+1];
	}else {
		tricell = cells[c-1] + cells[c] + cells[0];
	}
	switch(tricell) {
		case Rules.rule1 : 
		    newCell = Rules.value1;
		    break;
		case Rules.rule3 : 
		    newCell = Rules.value3;
		    break;
		case Rules.rule8 : 
		    newCell = Rules.value8;
		    break;
		case Rules.rule6 : 
		    newCell = Rules.value6;
		    break;
		case Rules.rule2 : 
		    newCell = Rules.value2;
		    break;
		case Rules.rule4 : 
		    newCell = Rules.value4;
		    break;
		case Rules.rule5 : 
		    newCell = Rules.value5;
		    break;
		case Rules.rule7 : 
		    newCell = Rules.value7;
		    break;
	}
	return newCell;
}



