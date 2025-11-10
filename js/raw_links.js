const url_category = "https://raw.githubusercontent.com/RazMunir/Json_Data/refs/heads/main/du_d/category.json";
const url_dealer = "https://raw.githubusercontent.com/RazMunir/Json_Data/refs/heads/main/du_d/dealer.json";
const url_item = "https://raw.githubusercontent.com/RazMunir/Json_Data/refs/heads/main/du_d/item.json";
const url_purchase = "https://raw.githubusercontent.com/RazMunir/Json_Data/refs/heads/main/du_d/purchase.json";
const url_unit = "https://raw.githubusercontent.com/RazMunir/Json_Data/refs/heads/main/du_d/units.json";

function fetch_data(url, tag, time_tag) {
    fetch(url)
      .then(res => res.json())
      .then(data => {
          console.log(tag+" len:"+data.length);
          save_ls(tag, data);
          save_ls(time_tag, date_time);
  }) 
  .catch(function(error) {
     console.log('Fetch problem: ' + error.message);
  });
}