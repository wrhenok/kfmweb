import { createRouter, createWebHashHistory } from 'vue-router'

// 3. 定义路由
const routes = [
    {
        path: '/',
        component: () => import('../views/Home.vue'),
        children: [
            {
                path: '/',
                component: () => import('../views/Index.vue')
            },
            
            {
                path: '/apply',
                component: () => import('../views/Apply.vue')
            },
           
            {
                path: '/about',
                component: () => import('../views/About.vue')
            }
        ]
    },
    {
        path: '/login',
        component: () => import('../views/Login.vue')
    },
    {
        path: '/chat',
        component: () => import('../views/Chat.vue')
    },
    
    {
        path: '/document',
        component: () => import('../views/Document.vue')
    },
    
]
// 4. 创建路由实例并传递 `routes` 配置
const router = createRouter({
    history: createWebHashHistory(),
    routes
})
//5. 暴露路由
export default router
