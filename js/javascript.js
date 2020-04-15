//----------------------Plus/Minus
function Plus(id, prod, price){
    var tag = $('#cont article figure div').find('#'+ id);
    if (tag.val() == '10') return;
    tag.val(parseInt(tag.val()) + 1);
    var tag2 =  $('#' + prod);
    tag2.val((parseFloat(tag2.val()) + price).toFixed(2)); 
};
function Minus(id, prod, price){
    var tag = $('#cont article figure div').find('#'+ id);
    if (tag.val() == '1') return;
    tag.val(parseInt(tag.val()) - 1);
    var tag2 =  $('#' + prod);
    tag2.val((parseFloat(tag2.val()) - price).toFixed(2)); 
};

//-----------------------Box
function openbox(switchBox) {
    if(switchBox)
        box.style.display = box.style.display == 'block' ? 'none' : 'block';
    else
        box.style.display = 'block';
};



//-----------------------Livrare
document.getElementById('name').value = localStorage.getItem('name');
document.getElementById('address').value = localStorage.getItem('address');
document.getElementById('phone').value = localStorage.getItem('phone');
document.getElementById('email').value = localStorage.getItem('email');

name.onblur = function() {
    if (this.value != "") { 
        this.className = "error";
        localStorage.setItem('name', this.value);
    }
};
address.onblur = function() {
    if (this.value != "") { 
        this.className = "error";
        localStorage.setItem('address', this.value);
    }
};
phone.onblur = function() {
    if (this.value != "") { 
        this.className = "error";
        localStorage.setItem('phone', this.value);
    }
};
email.onblur = function() {
    if (this.value != "") { 
        this.className = "error";
        localStorage.setItem('email', this.value);
    }
};


