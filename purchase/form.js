let array_purchase =  get_purchase_f_ls() || [];
let array_item =  get_item_f_ls() || [];
let array_unit =  get_unit_f_ls() || [];
let array_dealer =  get_dealer_f_ls() || [];

const form = get_by_id('form');
const id = get_by_id('id');
const iid = get_by_id('iid');
const iname = get_by_id('iname');
const date_p = get_by_id('date_p');
const qty = get_by_id('qty');
const unit_dd = get_by_id('unit_dd');
const price = get_by_id('price');
const dealer_dd = get_by_id('dealer_dd');
const note = get_by_id('note');
const btn = get_by_id('btn');
const notification = get_by_id('notification');

id.value = array_purchase.length;
date_p.value = formatted_date;

// populate unit dd
for(var i = 0; i < array_unit.length; i++) 
{ 
    var opt = array_unit[i]; 
    var el = document.createElement("option");
    el.textContent = opt.name; 
    el.value = opt.id;
    unit_dd.appendChild(el); 
}
// populate dealer dd
for(var i = 0; i < array_dealer.length; i++) 
{ 
    var opt = array_dealer[i]; 
    var el = document.createElement("option");
    el.textContent = opt.cname; 
    el.value = opt.id;
    dealer_dd.appendChild(el); 
}

id.addEventListener('input', () => {
    if(id.value == "") {
        btn.innerText = "Save";
        iid.value = "";
        date.value = "";
        qty.value = "";
        unit_dd.value = "";
        price.value = "";
        dealer_dd.value = "";
        note.value = "";
    } else if(id.value >= 0 
      & id.value <= (array_item.length - 1)) {
        btn.innerText = "Update";
        var obj = array_purchase[id.value];
        iid.value = obj.iid;
        date_p.value = obj.date;
        qty.value = obj.qty;
        unit_dd.value = obj.unit;
        price.value = obj.price;
        dealer_dd.value = obj.dealer;
        note.value = obj.note;
    } else {
        btn.innerText = "Save";
        iid.value = "";
        date.value = "";
        qty.value = "";
        unit_dd.value = "";
        price.value = "";
        dealer_dd.value = "";
        note.value = "";
    } 
});
iid.addEventListener('input', () => {
    iname.innerText = array_item[iid.value].name;
});

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    
    if(btn.innerText == "Update") {
        console.log("Update");
        array_purchase[id.value].iid = iid.value;
        array_purchase[id.value].date = date_p.value;
        array_purchase[id.value].qty = qty.value;
        array_purchase[id.value].unit = unit_dd.value;
        array_purchase[id.value].price = price.value;
        array_purchase[id.value].dealer = dealer_dd.value;
        array_purchase[id.value].note = note.value;
        
        showNotification('Product updated successfully!', 'success');
    } else {
        console.log("Save");
        var obj = {
          id: array_purchase.length,
          iid: iid.value,
          date: date_p.value,
          qty: qty.value,
          unit: unit_dd.value,
          price: price.value,
          dealer: dealer_dd.value,
          note: note.value
        };
    
        array_purchase.push(obj)
        showNotification('Product saved successfully!', 'success');
    }
    save_purchase_i_ls(array_purchase);
});