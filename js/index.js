/* Button id init */
const category_f_btn = get_by_id("category_fetch_btn");

const dealer_f_btn = get_by_id("dealer_fetch_btn");

const item_f_btn = get_by_id("item_fetch_btn");

const purchase_f_btn = get_by_id("purchase_fetch_btn");

const unit_f_btn = get_by_id("unit_fetch_btn");



/* Time id init */
const category_f_time = get_by_id("category_fetch_time");

const dealer_f_time = get_by_id("dealer_fetch_time");

const item_f_time = get_by_id("item_fetch_time");

const purchase_f_time = get_by_id("purchase_fetch_time");

const unit_f_time = get_by_id("unit_fetch_time");



/* set time value */
category_f_time.innerText =  get_category_fetch_time_f_ls() || "Time";

dealer_f_time.innerText =  get_dealer_fetch_time_f_ls() || "Time";

item_f_time.innerText =  get_item_fetch_time_f_ls() || "Time";

purchase_f_time.innerText =  get_purchase_fetch_time_f_ls() || "Time";

unit_f_time.innerText =  get_unit_fetch_time_f_ls() || "Time";



/* fetch buttons */
category_f_btn.addEventListener('click', () => {
    confirm_modal("Category");
});
dealer_f_btn.addEventListener('click', () => { 
    confirm_modal("Dealer")
});
item_f_btn.addEventListener('click', () => {
    confirm_modal("Item");
});
purchase_f_btn.addEventListener('click', () => {
    confirm_modal("Purchase");
});
unit_f_btn.addEventListener('click', () => {
    confirm_modal("Unit");
});