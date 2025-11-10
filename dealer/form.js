const form = get_by_id('form');
const id = get_by_id('id');
const cname = get_by_id('cname');
const dname = get_by_id('dname');
const contact = get_by_id('contact');
const btn = get_by_id('btn');
const notification = get_by_id('notification');

let array_dealer =  get_dealer_f_ls() || [];

id.value = array_dealer.length;

id.addEventListener('input', () => {
    if(id.value == "") {
        btn.innerText = "Save";
        cname.value = "";
        dname.value = "";
        contact.value = "";
    } else if(id.value >= 0 
      & id.value <= (array_dealer.length - 1)) {
        btn.innerText = "Update";
        cname.value = array_dealer[id.value].cname;
        dname.value = array_dealer[id.value].dname;
        contact.value = array_dealer[id.value].cnumber;
    } else {
        btn.innerText = "Save";
        cname.value = "";
        dname.value = "";
        contact.value = "";
    } 
});

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    
    if(btn.innerText == "Update") {
        console.log("Update");
        array_dealer[id.value].cname = cname.value;
        array_dealer[id.value].dname = dname.value;
        array_dealer[id.value].cnumber = contact.value;
        
        showNotification('Product updated successfully!', 'success');
    } else {
        console.log("Save");
        var obj = {
          id: array_dealer.length,
          cname: cname.value,
          dname: dname.value,
          cnumber: contact.value
        };
    
        array_dealer.push(obj)
        showNotification('Product saved successfully!', 'success');
    }
    save_dealer_i_ls(array_dealer);
});