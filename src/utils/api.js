import {service} from './request'
/*
* @param username
* @param userPassword
* if error
* return "用户名或密码不合法"
* success return 用户信息
* */
export const login = params => {
    return service.post('/login', params)
}

/*
*  @param username
*  成功返回信息，不成功返回0
* */
export const updateUsername = params => {
    return service.post('/updateUsername', params)
}
/*
*  @param username
*  成功返回用户信息
* */
export const getuser = params => {
    return service.post('/getuser', params)
}

/*
*  @param username
*  成功返回用户信息
* */
export const getsite = params => {
    return service.post('/getuser', params)
}

/* news*/


/*
*  @param title,content,image
*  成功返回用户信息
* */
export const publishNews = params => {
    return service.post('/news/publish', params)
}

/*
*  @param newsId
* */
export const deleteNews = params => {
    return service.post('/news/delete', params)
}
/*
*  @param newsId,title,content,image
* */
export const updateNews = params => {
    return service.post('/news/update', params)
}

/*
*  @param  newsId
* */
export const getNews = params => {
    return service.post('/news/get', params)
}
/*
*  @param  pageNum,pageSize
* */
export const getcatalogNews = params => {
    return service.post('/news/getcatalog', params)
}

//order ***************

/*
*  @param  siteId,siteName,rent,startTime,endTime
* */
export const createOrder = params => {
    return service.post('/order/create', params)
}

/*
*  @param   orderId, auditStatus
* 审核通过或不通过
* */
export const auditOrder = params => {
    return service.post('/order/audit', params)
}
/*
*  @param   orderId
* 管理员取消订单
* */
export const cancelOrder = params => {
    return service.post('/order/cancel', params)
}

/*
*  @param   orderId
* 普通用户取消订单
* */
export const userCancelOrder = params => {
    return service.post('/order/user/cancel', params)
}

/*
*  @param   orderId,status,{pageNum,pageSize}
* 管理员根据场地查看订单
* */
export const siteListOrder = params => {
    return service.post('/order/stadium/list', params)
}
/*
*  @param  status,{pageNum,pageSize}
* 管理员按用户列出订单
* */
export const siteListOrderByUser = params => {
    return service.post('/order/user/list', params)
}
/*
*  @param  orderId
* 管理员按用户列出订单
* */
export const getOrder = params => {
    return service.post('/order/get', params)
}

