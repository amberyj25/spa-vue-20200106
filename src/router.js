import Vue from "vue"
import VueRouter from "vue-router"
import App from "./App.vue"
import about from "./about.vue"
import courses from "./courses.vue"
import booking from "./booking.vue"
import courseslist from "./courseslist"
import coursedetail from "./coursedetail"

Vue.use(VueRouter)

export default new VueRouter({
    routes:[
        {
            path:"/",
            component:App,
            children:[
                {
                    path:"about",
                    name:"about",
                    component:about
                },{
                    path:"courses",
                    component:courses,
                    children:[
                        { 
                            path:"",
                            component:courseslist
                        },{
                            path:":id",
                            name:"coursedetailid",
                            component:coursedetail
                        }
                    ]
                },{
                    path:"booking",
                    component:booking
                },{
                    path:"*",
                    component:about
                }
            ]
        }
    ]
})