export default class Utils {
    static throttle(fn,interval) {
        let timer,now = Date.now(),firstExe = false;
        return function() {
            var args = arguments,_this = this
            let _now = Date.now()//execute time
            if(!firstExe){
                fn.apply(_this,args);
                now = _now
                firstExe = true
            }else{
                if(interval-_now+now>=0){
                    clearTimeout(timer)
                }
                timer = setTimeout(function(){
                    now = Date.now()
                    fn.apply(_this,args);
                },interval-_now+now)
            }
        }
    }
}