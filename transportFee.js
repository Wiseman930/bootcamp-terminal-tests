module.exports = function transportFee(shift) {
    if (shift === 'morning' ){
       return 'R20';
    }else if (shift === 'afternoon' ){
       return 'R10';
    }

   else  (shift === 'nightshift' )
       return 'free';


   }