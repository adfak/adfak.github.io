function ajax(methods,url,sync,fn){
	var xmlhttp=new XMLHttpRequest();
	xmlhttp.open(methods,url,sync)
	xmlhttp.send()
	xmlhttp.onreadystatechange=function(){
		if(xmlhttp.readyState==4){
			if(xmlhttp.status==200){
				fn(xmlhttp.responseXML)
			}	
		}	
	}
}
