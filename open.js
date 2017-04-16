function $Metering() {
    
    var $meteringArr, $meteringArrCount;
    
    this.create = function() {
        $meteringArr = new Array();
        $meteringArrCount = 0;
        return true || false;
    };
    
    this.destroy = function() {
        $meteringArr.delete;
        $meteringArrCount.delete;
        return true || false;
    };
    
    this.add = function(addExample) {
        $meteringArr.push(Number(addExample));
        $meteringArrCount++;
        return $meteringArrCount;
    };
    
    this.count = function() {
        return $meteringArrCount;
    };
    
    this.cast = function() {
        var calcCast = 0;
        
        for (var iCast = 0; iCast < $meteringArrCount; iCast++) {
            calcCast = calcCast + $meteringArr[iCast];
        }
        calcCast = calcCast / $meteringArrCount;
        return Number(calcCast);
    };
    
}
