window.onload = function (){

	$('contain1').onclick = function (){

	
		document.getElementById('contain1').style.width = '55.8%';		
		
		//document.getElementById('picture').style.cssText = 'z-index：-1';
		document.getElementById('little-shumo').style.display = 'block';

		document.getElementById('contain2').style.width = '8.4%';
		document.getElementById('contain3').style.width = '8.4%';
		document.getElementById('paralle1').style.display='none';
		document.getElementById('paralle2').style.display='block';
		document.getElementById('paralle3').style.display='block';
		document.getElementById('little-shumo').style.display = 'block';
		document.getElementById('little-shumo').style.width = '350px';	
			
 
 
    }; 
	$('contain2').onclick = function (){
		
		document.getElementById('picture').style.cssText = 'z-index：-1';
		document.getElementById('little-shumo').style.display = 'block';

		document.getElementById('contain1').style.width = '8.4%';
		document.getElementById('contain2').style.width = '55.8%';
		document.getElementById('contain3').style.width = '8.4%';
		document.getElementById('paralle1').style.display='block';
		document.getElementById('paralle2').style.display='none';
		document.getElementById('paralle3').style.display='block';
		document.getElementById('little-shumo').style.width = '350px';	

	};
	$('contain3').onclick = function (){
	//	document.getElementById('picture').style.cssText = 'z-index：0';
		
		document.getElementById('contain1').style.width = '8.4%';
		//document.getElementById('picture').style.width = '0';
		
		document.getElementById('little-shumo').style.display = 'block';
		document.getElementById('contain2').style.width = '8.4%';
		document.getElementById('contain3').style.width = '55.8%';
		document.getElementById('paralle1').style.display='block';
		document.getElementById('paralle2').style.display='block';
		document.getElementById('paralle3').style.display='none';
		document.getElementById('little-shumo').style.width = '350px';	
		

	};
	$('contain1').onmouseover = function (){
		$('SML-1').style.cssText='background-color:rgba(255,255,255,0.5)';

	};
	$('contain1').onmouseout = function (){
		$('SML-1').style.cssText='background-color:#278ba1';

	};
	$('contain2').onmouseover = function (){
		$('SML-2').style.cssText='background-color:rgba(255,255,255,0.5)';

	};

	$('contain2').onmouseout = function (){
		$('SML-2').style.cssText='background-color:#1ca8c6';

	};
	$('contain3').onmouseover = function (){
		$('SML-3').style.cssText='background-color:rgba(255,255,255,0.5)';

	};
	$('contain3').onmouseout = function (){
		$('SML-3').style.cssText='background-color:#00d2ff';

	};
	$('little-shumo').onclick = function (){
		document.getElementById('contain1').style.width = '8.4%';
		//document.getElementById('picture').style.cssText= 'z-index:0';
		document.getElementById('little-shumo').style.display = 'none';
		//document.getElementById('little-shumo').style.cssText = 'z-index-1;';
		document.getElementById('contain2').style.width = '8.4%';
		document.getElementById('contain3').style.width = '8.4%';
		document.getElementById('paralle1').style.display='block';
		document.getElementById('paralle2').style.display='block';
		document.getElementById('paralle3').style.display='block';
		document.getElementById('little-shumo').style.width = '0px';	

		
	};
	$('title1').onmouseover = function (){
		$('hoverstyle1').style.cssText='display:block;';

	};
	$('title1').onmouseout = function (){
		$('hoverstyle1').style.cssText='display:none;';

	};
	$('title2').onmouseover = function (){
		$('hoverstyle2').style.cssText='display:block;';

	};
	$('title2').onmouseout = function (){
		$('hoverstyle2').style.cssText='display:none;';

	};
	$('title3').onmouseover = function (){
		$('hoverstyle3').style.cssText='display:block;';

	};
	$('title3').onmouseout = function (){
		$('hoverstyle3').style.cssText='display:none;';

	};
	$('title4').onmouseover = function (){
		$('hoverstyle4').style.cssText='display:block;';

	};
	$('title4').onmouseout = function (){
		$('hoverstyle4').style.cssText='display:none;';

	};
	$('title5').onmouseover = function (){
		$('hoverstyle5').style.cssText='display:block;';

	};
	$('title5').onmouseout= function (){
		$('hoverstyle5').style.cssText='display:none;';

	};
	$('title6').onmouseover = function (){
		$('hoverstyle6').style.cssText='display:block;';

	};
	$('title6').onmouseout = function (){
		$('hoverstyle6').style.cssText='display:none;';

	};
	$('title7').onmouseover = function (){
		$('hoverstyle7').style.cssText='display:block;';

	};
	$('title7').onmouseout = function (){
		$('hoverstyle7').style.cssText='display:none;';

	};
	$('title8').onmouseover = function (){
		$('hoverstyle8').style.cssText='display:block;';

	};
	$('title8').onmouseout = function (){
		$('hoverstyle8').style.cssText='display:none;';

	};

function $( id ){
	return document.getElementById( id );
}
};