import {createRouter, createWebHistory} from 'vue-router'
import store from '../store'
import Home from './../pages/Home.vue'
import Posts from './../pages/Admin/Posts.vue'
import Edit from './../pages/Admin/Edit.vue'
import Post from './../pages/Post.vue'
import Login from './../pages/Login.vue'
import Register from './../pages/Register.vue'

const routes = [
    {
        path:'/',
        name : 'home',
        component:Home
    },
    {
        path:'/posts/:slug',
        name : 'post',
        component:Post,
        props:true,
    },
    {
        path:'/admin/login',
        name : 'admin.login',
        component:Login
    },
    {
        path: '/admin/posts',
        name:'admin.posts',
        component : Posts,
        beforeEnter: (to,form,next)=>{
            if(!store.getters.authenticated){
                return next({name:'admin.login'})
            }
            return next()
        }
    },
    {
        path: '/admin/posts/:uuid/edit',
        name:'admin.posts.edit',
        component : Edit,
        props: true,
        beforeEnter: (to,form,next)=>{
            if(!store.getters.authenticated){
                return next({name:'admin.login'})
            }
            return next()
        }
    },
    // {
    //     path:'/admin/register',
    //     name: 'admin.register',
    //     component: Register
    // }

]



export default createRouter({
    history:createWebHistory(),
    routes
})