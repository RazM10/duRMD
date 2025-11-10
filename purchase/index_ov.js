const search_input = document.getElementById('search_input');
const table = get_by_id('table');

let array_item =  get_item_f_ls() || [];
let array_purchase =  get_purchase_f_ls() || [];

document.addEventListener('DOMContentLoaded', () => {
    table_render();
});

search_input.addEventListener('input', () => {
    table_render();
});

function table_render() {
    const search_term = search_input.value.toLowerCase();
    const filtered_item = array_purchase .filter(product => array_item[product.icode.split('-')[1]].name.toLowerCase().includes(search_term));
    table.innerHTML = filtered_item
        .map(item => `
            <tr>
                <td>${item.id}</td>
                <td>${item.date}</td>
                <td>${array_item[item.icode.split('-')[1]].name}</td>
                <td>${item.qty}${item.unit}</td>
                <td>${item.price}</td>
            </tr>
        `).join('');
}
