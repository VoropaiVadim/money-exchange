// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
	let obj = {};
	if(currency > 0 && currency < 10000){
		let temp = [];
		let quantity50 = 0;
		let quantity25 = 0;
		let quantity10 = 0;
		let quantity5 = 0;
        let quantity1 = 0;
        
		quantity50  = Math.floor(currency / 50);
		currency = currency - quantity50 * 50;
		quantity25 = Math.floor(currency / 25);
		currency = currency - quantity25 * 25;
		quantity10 = Math.floor(currency / 10);
		currency = currency - quantity10 * 10;
		quantity5 = Math.floor(currency / 5);
		currency = currency - quantity5 * 5;
        quantity1 = currency / 1;
        
		temp[0] = quantity50;	
		temp[1] = quantity25;
		temp[2] = quantity10;
		temp[3] = quantity5;
		temp[4] = quantity1;
        for(let i = 0; i < 5; i++)
        {
			if(temp[i] != 0 && i == 0){
				obj["H"] = temp[i];
			}
			else if(temp[i] != 0 && i == 1){
				obj["Q"] = temp[i];
			}
			else if(temp[i] != 0 && i == 2){
				obj["D"] = temp[i];
			}
			else if(temp[i] != 0 && i == 3){
				obj["N"] = temp[i];
			}
			else if(temp[i] != 0 && i == 4){
				obj["P"] = temp[i];
			}
			else{
				continue;
			}
		}
	}
	else if(currency != 0 && currency > 10000){
		obj.error = "You are rich, my friend! We don't have so much coins for exchange";
	}
	return obj;
}