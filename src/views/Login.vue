<template>
    <div class="login-page">

        <div class="login-wrap">
            <div class="row justify-content-center m-0">
                <div class="col-xl-6 col-lg-6 col-md-12">
                    <div class="hero-heading">
                        <div class="headline">
                            <h3>Welcome to Skill Upgradation Program</h3>
                            <p>We are delighted to see you here. Get your way to upskill the technologies in the Digital
                                World & Stand out from the Crowd</p>
                        </div>
                    </div>
                    <div class="login-img">
                        <img src="static/images/colleagues-working-project-discussing-details.jpg" alt="" />
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-12 bg-color-6  ">
                    <div class="fxt-header">
                        <a href="#" class="fxt-logo"><img src="static/images/eluminous-pvt-ltd_icon.png" alt="" /></a>
                        <div class="fxt-page-switcher">

                            <router-link class="login-link" to="/login">
                                <a href="#" class="switcher-text1 active">Log In</a>
                            </router-link>

                            <router-link class="" to="/register">
                                <a href="#" class="switcher-text1">Register</a>
                            </router-link>
                        </div>
                    </div>
                    <div class="login-box bg-white border-radius-10">


                        <div class="login-title">
                            <h2 class="text-primary">Login</h2>
                            <p>Log in to continue in our SkillApp</p>
                        </div>
                        <Form @submit="onSubmit" :validation-schema="schema" v-slot="{ errors }">
                            <div class="input-group custom custom-icon">
                                <Field type="text" name="email" v-model="form.email" class="form-control form-control-lg"
                                    :class="{ 'is-invalid': errors.email }" placeholder="email" />
                                <img src="static/images/email.png" alt="" />
                                <div class="input-group-append custom">
                                    <span class="input-group-text"><i class="icon-copy dw dw-user1"></i></span>
                                </div>
                                <div class="invalid-feedback">{{ errors.email }}</div>
                            </div>
                            <div class="input-group custom custom-icon">
                                <Field type="password" name="password" v-model="form.password"
                                    class="form-control form-control-lg" :class="{ 'is-invalid': errors.password }"
                                    placeholder="**********" />
                                <img src="static/images/lock.png" alt="" />
                                <div class="input-group-append custom">
                                    <span class="input-group-text"><i class="dw dw-padlock1"></i></span>
                                </div>
                                <div class="invalid-feedback">{{ errors.password }}</div>
                            </div>
                            <div class="row pb-30">
                                <!-- <div class="col-6">
                               <div class="custom-control custom-checkbox">
                                                       <input type="checkbox" class="custom-control-input" id="customCheck1">
                                                       <label class="custom-control-label" for="customCheck1">Remember</label>
                                                   </div> 
                               </div>-->
                                <div class="submit-button">
                                    <div class="input-group mb-0">
                                        <input class="btn btn-primary btn-lg btn-block" type="submit" value="Sign In" />
                                    </div>

                                    <div class="forgot-password text-center">
                                        <router-link to="/forgot-password">Forgot Password</router-link>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-12">
                                    <div class="input-group mb-0 have-account">
                                        <router-link class="" to="/register">Don't have an account?
                                            <span>Register</span></router-link>
                                    </div>
                                </div>
                            </div>
                        </Form>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</template>
<script>
import config from '../config/app'
import { Form, Field } from "vee-validate";
import * as Yup from "yup";
import userAPI from "../api/user";
// import store from "../store";
import { useStore } from '../stores/authStore'
export default {
    name: "login",
    components: {
        Form,
        Field,
    },
    data() {
        const schema = Yup.object().shape({
            email: Yup.string()
                .required("Email is required")
                .email("Email is invalid"),
            password: Yup.string()
                .min(6, "Password must be at least 6 characters")
                .required("Password is required"),
        });
        return {
            schema,
            form: {
                email: "",
                password: "",
            },
            bUrl: config.server,
            useData:''
        };
    },
    methods: {
        onSubmit() {
            userAPI.loginUser(this.form).then((response) => {
                    if (response.status === "success") {
                        this.useData.userData(response.data)
                        this.$toast.show(response.message, {
                            type: "success",
                        });
                           // if (process.env.NODE_ENV === 'production') {
                        //     window.location.href = this.bUrl + '/home';
                        // } else {
                            // window.location.href = 'http://localhost:8080/home';
                        // }/
                            // console.log('asdasdasd')
                        this.$router.push({ name: "home" });
                    } else {
                        this.$toast.show(response.message, {
                            type: "error",
                        });
                    }
                })
                .catch((err) => { });
        },
    },
    created() {
        this.useData = useStore()
        // console.log('dddddd',store.getters.currentUser);
    },
};
</script>