import Router from 'koa-router';
import React from 'react';

const routes = new Router();

routes.get('/', (ctx, next) => {
    ctx.render();
    next();
})

routes.get('/list', (ctx, next) => {
    ctx.render({
        list: {
            list: [
                '我是从node中获取的数据',
                '感觉还不错',
                '测试成功',
            ]
        }
    });
    next();
})
routes.post('/GetList',async (ctx,next)=>{
    ctx.body={
        data:'aaaa',
        code:0
    }
    await next()
})
export default routes;
