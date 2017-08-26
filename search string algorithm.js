/*
ALGORITHM DESCRIPTION
Xét chuỗi nguồn (từ input) và 1 mảng các chuỗi đích(chuỗi có sẵn trong database)
-Giả sử mỗi chuỗi đích có 1 id để phân biệt
-Tạo 1 mảng mới chứa các phần tử là các cặp key-value. Trong đó key là id của các chuỗi đích, 
value là chỉ số để đánh giá mức độ gần đúng của chuỗi đích này so với chuỗi nguồn.
 vd: var arr = [ {id: xxx, core: yyy} ];
- Tính độ gần đúng (tính core)
	+ Tách chuỗi nguồn thành mảng các từ (giả sử ta đặt tên cho mảng này là wordArr)
	+ Duyệt qua từng chuỗi đích, tính tổng số lần xuất hiện của mỗi từ trong wordArr có trong
	chuỗi đích, chia tổng tính được cho độ dài chuỗi đích.
	+ Lưu tổng tính được vào thuộc tính core
- Trong mảng arr, id có core lớn nhất là chuỗi gần đúng nhất
*/


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



