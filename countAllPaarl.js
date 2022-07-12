const parameter = 'CJ 345 123,CJ 2345,CL 123-546,CK 345,CJ 123';
module.exports = function countAllPaarl (itemString) {
   let counter = 0;
   const products =  itemString.split(",");
   for (var i=0;i<products.length;i++){
   let currentProduct = products[i];
   if (currentProduct.includes("CJ")){
     //console.log(currentProduct);
     counter ++;

   }
} return counter;
}

