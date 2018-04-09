function test(){
	var search = document.getElementById("search").value;
	
	var x = new XMLHttpRequest();
	x.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){
			var html = '';
			var r = JSON.parse(this.response);
			for(x in r){
				html += '<div>'+r[x].name+'</div>';
			}
			document.getElementById("result").innerHTML = html;
		}
	}
	x.open("POST",BASEURL+"/giohang/test",true);	
	x.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	x.send("search="+search);
}

function remove(id){
	var c = confirm("Are you remove?");
	if(c){
		var x = new XMLHttpRequest();
		x.onreadystatechange = function(){
			if(this.readyState == 4 && this.status == 200){
				document.getElementById("row_"+id).remove();
			}
		}
		x.open("POST","http://localhost/mvc-Copy/vd/remove",true);	
		x.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		x.send("id="+id);
	}
}

function removerow()
{
	 $(document).ready(function(){
	 
	 	
	var c = confirm("Are you remove?");
	if(c){
  
   var id = [];
   
   $(':checkbox:checked').each(function(i){
    id[i] = $(this).val();
   });
 // alert(id);

   if(id.length === 0) 
   {
    alert("Chon checkbox");
   }
   else
   {
    $.ajax({
     url:'http://localhost/mvc-Copy/vd/remove',
     method:'POST',
 	 data:{id:id.join(",")},
     success:function(data)
     {
     	
    
	      for(var i=0; i<id.length; i++)
	      {
	     //alert(id[i]);
	       $('tr#'+id[i]+'').css('background-color', '#ccc');
	       $('tr#'+id[i]+'').fadeOut('slow');
	      }
     }
   
    });

   }
   
  }
  else
  {
   return false;
  }
 });
 

}	




 function edit()
{
	
	var cbx=document.getElementsByName("cbx");
	for(var i=0;i<cbx.length;i++)
	{
		if(cbx[i].checked ===true)
			{
				var a=cbx[i].value;
				
			}
	}
		window.location.href="http://localhost/mvc-Copy/vd/edit/?id="+a;
}

function save(){
	var arr = {};
	var txt = document.getElementsByName("txt");
	
	for(i=0; i<txt.length; i++){
		arr[txt[i].id] = txt[i].value;
		
		//alert(arr[txt[i].id]);

	}
	//console.log(arr);
	/*var id = document.getElementById("id").value;
	var name = document.getElementById("name").value;
	var content = document.getElementById("content").value;
	*/
	var x = new XMLHttpRequest();
		x.onreadystatechange = function(){
			if(this.readyState == 4 && this.status == 200){
				console.log(this.response);
				//alert("aa");
			}
		}
		x.open("POST","http://localhost/mvc-Copy/vd/save",true);	
		x.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		x.send("arr="+JSON.stringify(arr));
//window.location.href="http://localhost/mvc-Copy/vd/save/?arr="+JSON.stringify(arr);
}
