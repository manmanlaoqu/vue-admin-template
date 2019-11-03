import service from '../../lib/request'
function login(params){
    params = params || {}
    return service({
        url:'api/web/me/login',
        method:'GET',
        params:params
    })
}
function addDriver(params){
    params = params || {}
    return service({
        url:'addDriver.do',
        method:'POST',
        data:params
    })
}
export default {
    addDriver,login
}
