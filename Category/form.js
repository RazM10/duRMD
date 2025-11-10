const form = get_by_id('form');
const id = get_by_id('id');
const name = get_by_id('name');
const code = get_by_id('code');
const btn = get_by_id('btn');
const notification = get_by_id('notification');

let array_category =  get_category_f_ls() || [];

id.value = array_category.length;

id.addEventListener('input', () => {
    if(id.value == "") {
        btn.innerText = "Save";
        name.value = "";
        code.value = "";
    } else if(id.value >= 0 
      & id.value <= (array_category.length - 1)) {
        btn.innerText = "Update";
        name.value = array_category[id.value].name;
        code.value = array_category[id.value].code;
    } else {
        btn.innerText = "Save";
        name.value = "";
        code.value = "";
    } 
});

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    
    if(btn.innerText == "Update") {
        console.log("Update");
        array_category[id.value].name = name.value;
        array_category[id.value].code = code.value;
        
        showNotification('Product updated successfully!', 'success');
    } else {
        console.log("Save");
        var obj = {
          id: array_category.length,
          name: name.value,
          code: code.value
        };
    
        array_category.push(obj)
        showNotification('Product saved successfully!', 'success');
    }
    save_category_i_ls(array_category);
});