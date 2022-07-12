module.exports = function findItemsOver20(itemList){

    var itemlist = [];
       for (var i = 0; i < itemList.length; i++){
         if(itemList[i].qty > 20){
          itemlist.push(itemList[i]);

            }

         }
         return  itemlist;
       }
