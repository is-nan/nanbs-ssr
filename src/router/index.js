import React from 'react';
import Home from '../views/Home/index'
import List from '../views/Auto/index'

export default [
    {
        path: '/',
        component: Home,
        exact: true,
    },
    {
        path: '/list',
        component: List,
        exact: true
    }
]
