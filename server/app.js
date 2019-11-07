import Koa from 'koa';
import routes from './router'
import templating from './templating'
import path from 'path';
import koaStatic from 'koa-static';
const app = new Koa();
// 静态资源
app.use(
    koaStatic(path.join(__dirname, '../build'), {
        maxage: 365 * 24 * 60 * 1000,
        index: 'root'
        // 这里配置不要写成'index'就可以了，因为在访问localhost:3030时，不能让服务默认去加载index.html文件，这里很容易掉进坑。
    })
);
app.use(templating)
app.use(routes.routes(), routes.allowedMethods());
app.listen(9000, () => {
    console.log(`node服务已经启动, 请访问localhost:9000`)
})
