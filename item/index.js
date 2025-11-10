const search_input = document.getElementById('search_input');
const table = get_by_id('table');

let array_item =  get_item_f_ls() || [];

document.addEventListener('DOMContentLoaded', () => {
    table_render();
});

search_input.addEventListener('input', () => {
    table_render();
});

function table_render() {
    const search_term = search_input.value.toLowerCase();
    const filtered_item = array_item.filter(product => product.name.toLowerCase().includes(search_term));
    table.innerHTML = filtered_item
        .map(item => `
            <tr>
                <td>${item.id}</td>
                <td>${item.ccode}</td>
                <td>${item.code}</td>
                <td>${item.name}</td>
                <td>${item.img}</td>
            </tr>
        `).join('');
}
