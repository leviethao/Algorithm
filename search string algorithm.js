
//============= ALGORITHM ===========

function searchStringAlgorithm(str, strArr) {
	var resultArr =[]; //element as {id: xxx, core: yyy}
	
	var wordArr = str.split(" ");
	
	strArr.forEach(function (element) {
		var tempWordArr = element.val.split(" ");
		var sum = 0;
		wordArr.forEach (function (word) {
			var count = 0;
			tempWordArr.forEach(function (tempWord) {
				if (tempWord == word) {
					count++;
				}
			});
			sum += count;
		});
		
		if (sum > 0) {
			sum /= element.val.length;
		}
		
		resultArr.push({id: element.id, core: sum});
	});
	
	//sort
	resultArr.sort(function (a, b) {
		return b.core - a.core;
	});
	
	return resultArr;
}



//==========  DATA  =====================

var strArr = [
	{
		id: "001",
		val: "hoc tieng anh mien phi"
	},
	
	{
		id: "002",
		val: "hoc tieng viet nang cao"
	},
	
	{
		id: "003",
		val: "lap trinh huong doi tuong nang cao"
	},
	
	{
		id: "004",
		val: "lap trinh web nang cao"
	},
	
	{
		id: "005",
		val: "lap trinh web co ban"
	},
	
	{
		id: "006",
		val: "lap trinh winform voi C#"
	},	

];





//=========== MAIN ==============

var mySearch = "viet";

var idArr = searchStringAlgorithm(mySearch, strArr);
idArr.forEach (function (element) {
	strArr.forEach(function (obj) {
		if (element.id == obj.id) {
			console.log(obj.val);
		}
	});
});



