module.exports = function findItemsOver(itemList, over){

    var itemlist = [];
       for (var i = 0; i < itemList.length; i++){
         if(itemList[i].qty > over){
          itemlist.push(itemList[i]);

            }

         }
         return  itemlist;
       }
