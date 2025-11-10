function get_ls(tag) {
    return JSON
        .parse(localStorage
        .getItem(tag));
}

function save_ls(tag, data) {
    // Save localStorage data:list,tag:lsname
    try {
        localStorage.setItem(tag, JSON.stringify(data));
    } catch (e) {
        
        console.error('localStg error:', e);
        return;
    }
}

function get_by_id(id) {
    return document.getElementById(id);
}


const tag_category = "category";
const tag_dealer = "dealer";
const tag_item = "item";
//const tag_purchase = "purchase";
const tag_purchase = "purchase25";
const tag_unit = "unit";
const tag_transaction = "transaction";

// fetch time tag
const tag_category_fetch_time = "category_fetch_time";
const tag_dealer_fetch_time = "dealer_fetch_time";
const tag_item_fetch_time = "item_fetch_time";
const tag_purchase_fetch_time = "purchase_fetch_time";
const tag_unit_fetch_time = "unit_fetch_time";
const tag_transaction_fetch_time = "transaction_fetch_time";

// category
function get_category_f_ls() {
    return get_ls(tag_category);
}
function save_category_i_ls(list) {
    save_ls(tag_category, list)
}
function get_category_fetch_time_f_ls() {
    return get_ls(tag_category_fetch_time);
}
function save_category_fetch_time_i_ls(data) {
    save_ls(tag_category_fetch_time, data);
}

// dealer
function get_dealer_f_ls() {
    return get_ls(tag_dealer);
}
function save_dealer_i_ls(list) {
    save_ls(tag_dealer, list)
}
function get_dealer_fetch_time_f_ls() {
    return get_ls(tag_dealer_fetch_time);
}
function save_dealer_fetch_time_i_ls(data) {
    save_ls(tag_dealer_fetch_time, data);
}

// item
function get_item_f_ls() {
    return get_ls(tag_item);
}
function save_item_i_ls(list) {
    save_ls(tag_item, list)
}
function get_item_fetch_time_f_ls() {
    return get_ls(tag_item_fetch_time);
}
function save_item_fetch_time_i_ls(data) {
    save_ls(tag_item_fetch_time, data);
}

// purchase
function get_purchase_f_ls() {
    return get_ls(tag_purchase);
}
function save_purchase_i_ls(list) {
    save_ls(tag_purchase, list)
}
function get_purchase_fetch_time_f_ls() {
    return get_ls(tag_purchase_fetch_time);
}
function save_purchase_fetch_time_i_ls(data) {
    save_ls(tag_purchase_fetch_time, data);
}

// unit
function get_unit_f_ls() {
    return get_ls(tag_unit);
}
function save_unit_i_ls(list) {
    save_ls(tag_unit, list)
}
function get_unit_fetch_time_f_ls() {
    return get_ls(tag_unit_fetch_time);
}
function save_unit_fetch_time_i_ls(data) {
    save_ls(tag_unit_fetch_time, data);
}

// transaction
function get_transaction_f_ls() {
    return get_ls(tag_transaction);
}
function save_transaction_i_ls(list) {
    save_ls(tag_transaction, list)
}
function get_transaction_fetch_time_f_ls() {
    return get_ls(tag_transaction_fetch_time);
}
function save_transaction_fetch_time_i_ls(data) {
    save_ls(tag_transaction_fetch_time, data);
}
