function toggle_visibility(id) {
  var e = document.getElementById(id);
  if(e.style.display == 'none')
    e.style.display = 'block';
  else
    e.style.display = 'none';
}

function toggle_visibility_sticky(id,name) {
  var e = document.getElementById(id);
  if(e.style.display == 'block') {
    e.style.display = 'none';
    new Ajax.Request('scmd.cgi?scmd=stickyshowhide&code='+name+'&hide=0&mytime='+new Date().getTime(), 
		     { method: 'get'} );
  } else {
    e.style.display = 'block';
    new Ajax.Request('scmd.cgi?scmd=stickyshowhide&code='+name+'&hide=1&mytime='+new Date().getTime(), 
		     { method: 'get'} );
  }
}

function toggle_visibility_double(id) {
  toggle_visibility(id);
  toggle_visibility('hidden_'+id);
}

function StickyTableUpdate(id, size) {
  new Ajax.Request('scmd.cgi?scmd=stickytable&code='+id+'&pagesize='+size+'&mytime='+new Date().getTime(), 
		   { method: 'get'} );

}

// used to check numeric fields
// to be applied using onkeyup=numeric_field_change(this)
function numeric_field_change(field) {
    var check = true;
    var value = field.value; //get characters
    //check that all characters are digits, ., -, or ""
    for(var i=0;i < field.value.length; ++i)
	{
	    var new_key = value.charAt(i); //cycle through characters
	    if(((new_key < "0") || (new_key > "9")) && 
	       !(new_key == "") &&
	       !(new_key == ".")
	       )
		{
                    check = false;
                    break;
		}
	}
    //apply appropriate colour based on value
    if(!check)
	{
	    field.style.backgroundColor = "red";
	}
    else
	{
	    field.style.backgroundColor = "white";
	}
}

// used to check the length of labels
// to be applied using onkeyup=label_field_change(this)
function label_field_change(field) {
    var check = true;
    var value = field.value;

    var box = document.getElementById("box_"+field.name);

    if (field.value.length < 20) {
	// everything ok
	field.style.backgroundColor = "white";
	box.innerHTML = "";
	box.style.backgroundColor = "white";
    } else if (field.value.length < 40) {
	// a little bit too long!
	field.style.backgroundColor = "orange";
	box.innerHTML = "Please keep it short!<br>(you can use a Text item before the current one to provide a description...)";
	box.style.backgroundColor = "orange";
    } else {
	// way too long!
	field.style.backgroundColor = "red";
	box.innerHTML = "Please keep it short!<br>(you can use a Text item before the current one to provide a description...)<br>WARNING: the content may not align properly when displayed or sent by mail!";
	box.style.backgroundColor = "red";
    }
}
