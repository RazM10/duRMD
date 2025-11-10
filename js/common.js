function confirm_modal(name) {
    let text = `Want to fetch ${name}?`;
    if (confirm(text) == true) {
      switch (name) {
         case "Category":
           fetch_data(url_category ,tag_category, tag_category_fetch_time);
           break;
         case "Dealer":
           fetch_data(url_dealer ,tag_dealer, tag_dealer_fetch_time);
           break;
         case "Item":
           fetch_data(url_item ,tag_item, tag_item_fetch_time);
           break;
         case "Purchase":
           fetch_data(url_purchase ,tag_purchase, tag_purchase_fetch_time);
           break;
         default:
           fetch_data(url_unit ,tag_unit, tag_unit_fetch_time);
      }
      
    } else {}
}