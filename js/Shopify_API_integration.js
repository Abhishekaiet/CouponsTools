$(document).ready(function() {
	const GetCustomerList = async () => {
			  const response_ = await fetch('https://cors-anywhere.herokuapp.com/https://store-mycommunity-today.myshopify.com/admin/api/2020-04/customers.json', {
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
						'Authorization':'Basic MTgyOTJlYjhmZmE4ODNhMTBlM2JkNGM5NzdhN2MyM2M6c2hwcGFfOGE1NTdmMTc4OTNjYjQ1YmQyZWRkZmYxOTk3NDZiNjU=',
					}
				  });
			  const Data = await response_.json();
			  console.log(Data.customers);
			  var Html="";
			  Data.customers.forEach(function(item,index){
				Html += '<div><input class="customerCheck" type="checkbox" data-name="'+item.first_name+'" data-email="'+item.email+'" value="'+item.id+'"><span>'+item.email+ "    " + item.first_name +'</span></div>'
			  });
			  $(".resultdiv").html(Html);
		}
		GetCustomerList();
		
		const GetPriceRulesID = async () => {
			  const response_ = await fetch('https://cors-anywhere.herokuapp.com/https://store-mycommunity-today.myshopify.com/admin/api/2020-04/price_rules.json', {
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
						'Authorization':'Basic MTgyOTJlYjhmZmE4ODNhMTBlM2JkNGM5NzdhN2MyM2M6c2hwcGFfOGE1NTdmMTc4OTNjYjQ1YmQyZWRkZmYxOTk3NDZiNjU=',
					}
				  });
			  const Data = await response_.json();
			  console.log(Data);
			  var ids=[];
			  Data.price_rules.forEach(function(item,index){
				ids.push(item.id);
			  });
		}
		GetPriceRulesID();	
}