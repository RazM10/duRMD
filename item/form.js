let array_category =  get_category_f_ls() || [];
let array_item =  get_item_f_ls() || [];

const form = get_by_id('form');
const id = get_by_id('id');
const category_dd = get_by_id('category_dd');
const img = get_by_id('img');
const name = get_by_id('name');
const btn = get_by_id('btn');
const notification = get_by_id('notification');

id.value = array_item.length;

// populate category dd
for(var i = 0; i < array_category.length; i++) 
{ 
    var opt = array_category[i]; 
    var el = document.createElement("option");
    el.textContent = opt.name; 
    el.value = opt.id;
    category_dd.appendChild(el); 
}

id.addEventListener('input', () => {
    if(id.value == "") {
        btn.innerText = "Save";
        category_dd.value = "";
        //img.value = "";
        name.value = "";
    } else if(id.value >= 0 
      & id.value <= (array_item.length - 1)) {
        btn.innerText = "Update";
        category_dd.value = array_item[id.value].ccode;
        img.value = array_item[id.value].img;
        name.value = array_item[id.value].name;
    } else {
        btn.innerText = "Save";
        category_dd.value = "";
        //img.value = "";
        name.value = "";
    } 
});

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    
    if(btn.innerText == "Update") {
        console.log("Update");
        array_item[id.value].ccode = category_dd.value;
        array_item[id.value].img = img.value;
        array_item[id.value].name = name.value;
        
        showNotification('Product updated successfully!', 'success');
    } else {
        console.log("Save");
        var obj = {
          id: array_item.length,
          ccode: category_dd.value,
          code: getCode(array_category[category_dd.value].code, array_item.length),
          img: img.value,
          name: name.value
        };
    
        array_item.push(obj)
        showNotification('Product saved successfully!', 'success');
    }
    save_item_i_ls(array_item);
});



// code for item G0001
function getCode(c, i) {
    //c: category code, i: item.length
    return (i<9) ? c+'000'+i
        : (i<99) ? c+'00'+i
        : (i<999) ? c+'0'+i : c+i;
}
