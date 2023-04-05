window.onload = function(){
    $('.deleteMode').hide();
    document.getElementById("add-button").disabled = true;
}

$(document).ready(function() {
    $('#editMode').click(function() {
        $('.deleteMode').toggle();
    });

    $('#port').tooltip({'trigger':'focus', 'title': 'Puoi lasciarlo vuoto se la porta è 80'});
});

function checkForm(elem) {
	var b = document.getElementById("add-button");
	if(elem.value == "" || elem.value.length == 0) {
		b.disabled = true;
	}
	else {
		b.disabled = false;
	}
}