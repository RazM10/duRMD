const table = get_by_id('table');

let array_dealer =  get_dealer_f_ls() || [];

document.addEventListener('DOMContentLoaded', () => {
    table_render();
});

function table_render() {
    table.innerHTML = array_dealer
        .map(item => `
            <tr>
                <td>${item.id}</td>
                <td>${item.cname}</td>
                <td>${item.dname}</td>
                <td>${item.cnumber}</td>
            </tr>
        `).join('');
}
