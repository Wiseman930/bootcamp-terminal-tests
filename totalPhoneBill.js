module.exports = function totalPhoneBill(string){
    var usage = string.split(',');
    var totalUsage = 0;
    var call = 2.75;
    var sms = 0.65;
    for(var i=0; i<usage.length; i++){
        var use = usage[i];
        if (use == 'call'){
            totalUsage += call;
        }
        else if (use == 'sms'){
            totalUsage += sms;
        }
    } return "R" + totalUsage.toFixed(2);
}