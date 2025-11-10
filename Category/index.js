const table = get_by_id('table');

let array_category =  get_category_f_ls() || [];

document.addEventListener('DOMContentLoaded', () => {
    table_render();
});

function table_render() {
    table.innerHTML = array_category
        .map(item => `
            <tr>
                <td>${item.id}</td>
                <td>${item.code}</td>
                <td>${item.name}</td>
            </tr>
        `).join('');
}