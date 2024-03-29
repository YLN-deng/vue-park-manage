import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/less/index.less'


// import axios from 'axios';
// Vue.prototype.$axios = axios
import qs from 'qs';
Vue.prototype.$qs = qs;


import {
    Button,
    Radio,
    Container,
    Main,
    Header,
    Aside,
    Menu,
    Submenu,
    MenuItem,
    MenuItemGroup,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Row,
    Col,
    Card,
    Table,
    TableColumn,
    Breadcrumb,
    BreadcrumbItem,
    Tag,
    Form,
    FormItem,
    Input,
    Select,
    Option,
    Switch,
    DatePicker,
    Dialog,
    Pagination,
    MessageBox,
    Message,
    Autocomplete,
    ButtonGroup,
    Upload,
    Image,
    Checkbox,
    Calendar,
    Loading,
    Progress,
    Steps,
    Step,
    Cascader,
    Tabs,
    TabPane,
    Tooltip
} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Button).use(Radio).use(Container).use(Main).use(Header).use(Aside)
    .use(Menu).use(Submenu).use(MenuItem).use(MenuItemGroup).use(Dropdown)
    .use(DropdownMenu).use(DropdownItem).use(Row).use(Col).use(Card)
    .use(Table).use(TableColumn).use(Breadcrumb).use(BreadcrumbItem)
    .use(Tag).use(Form).use(FormItem).use(Input).use(Select).use(Option)
    .use(Switch).use(DatePicker).use(Dialog).use(Pagination).use(Autocomplete)
    .use(ButtonGroup).use(Upload).use(Image).use(Checkbox).use(Calendar).use(Loading)
    .use(Progress).use(Steps).use(Step).use(Cascader).use(Tabs).use(TabPane).use(Tooltip);
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$message = Message

import VueAnimateNumber from 'vue-animate-number' //数字动态加载插件
Vue.use(VueAnimateNumber)

import VueParticles from 'vue-particles'  
Vue.use(VueParticles)

import VueDraggableResizable from 'vue-draggable-resizable'

// optionally import default styles
import 'vue-draggable-resizable/dist/VueDraggableResizable.css'

Vue.component('vue-draggable-resizable', VueDraggableResizable)

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
    store.commit('getToken')
    const token = store.state.user.token
    if(!token && to.name === 'signUp'){
        next()
    }else if (!token && to.name !== 'login') {
        next({ name: 'login' })
    }else if (token && to.name === 'login') {
        next({ name: 'home' })
    }else {
        next()
    }
})



new Vue({
    router,
    store,
    render: h => h(App),
    created() {
        store.commit('addMenu', router)
    }
}).$mount('#app')