<template>   
    <div class="pd-ltr-20">
            <div class="card-box pd-20 height-100-p mb-30">
                <div class="row align-items-center">
                    <div class="col-md-2">
                        <img :src="profilePhoto" id="user_image" v-if="profilePhoto!=''" alt="" @error="onImageLoadFailure($event, 'user_image')"/>
                        <img v-else src="static/images/banner-img.png" alt="" />
                    </div>
                    <div class="col-md-10">
                        <h4 class="font-20 weight-500 mb-10 text-capitalize ">
                            Welcome {{userName}}! 
                        </h4>
                        <span><strong> Designation : </strong>{{designation}}</span> <br><br>
                        <p class="font-18 max-width-900 font-16">
                          Nothing to Prove. Everything To Improve.<br>
                          eLuminous Technologies is proud to have a team-mate like you. Let's build your profile with the intellectual process of learning trending technologies.</p>
                    </div>
                </div>
            </div>
           <div class="xs-pd-20-10 pd-ltr-20">
            <div class="page-header">
                <div class="row">
                    <div class="col-md-6 col-sm-12 text-right">
                        <div class="dropdown-wrap">
                        <select class="form-select" aria-label="Select Quarter" v-model="currentQuarter" @change="getUserPlanDetails()">  
                            <option value="q1">First Quarter</option>
                            <option value="q2">Second Quarter</option>
                            <option value="q3">Third Quarter</option>
                            <option value="q4">Fourth Quarter</option>
                        </select>
  
                        <div class="dropdown-wrap">
                            <select name="year"  class="form-select col-12" v-model="currentYear" @change="getUserPlanDetails()">
                                <option value="">Select year</option>
                                <option v-for="year in yearList" :value="year" v-bind:key="year">{{ year}}</option>
                            </select>
                        </div>
                    </div>
                    </div> 
                </div>
            </div>
            <div class="title pb-20">
                <h2 class="h3 mb-0">My plan overview</h2>
            </div>
            <div class="row clearfix progress-box" v-if="userData.length > 0">
                <div class="col-lg-4 col-md-6 col-sm-12 mb-30" v-for="(value,key) in userData">
                    <div class="card-box pd-30 height-100-p">
                        <div class="progress-box text-center">
                            <apexchart width="380" :ref="'apexChart1'+key" type="radialBar" :options="options" :series="[value.total_percentage]" ></apexchart>
                            <!--<UserProgressChart v-bind='key' :percentage='value.total_percentage'></UserProgressChart> -->
                            <h5 class="text-blue padding-top-10 h5">{{value.month}}</h5>
                            <span class="d-block plan-name"><span>Leader -</span>{{value.user_skill_plan.user_skill_plan.leaderData.first_name}}  {{value.user_skill_plan.user_skill_plan.leaderData.last_name}}
                            <br><span>Plan Name -</span>{{value.skill}}
                            </span>
                            <span class="d-block task-details">
                                <span>Task Details </span>
                                <ul >
                                    <li  v-for="(task,index) in value.task" class="number-bar">
                                    <div> {{task.task}}</div>
                                    <label v-if="task.percentage" >{{task.percentage}}%</label>
                                    </li>
                                </ul>
                            </span>
                            <span class="d-block rating-wraper"><span>Rating -</span> {{value.rating}} </span>
                            <span class="d-block leader-review"><span>Leader Review  </span>{{value.leader_review}} </span>
                            <!--  <button type="button" data-toggle="modal" :disabled="months.indexOf(value.month) > currentMonth && value.rating !=='' ? true : false" data-target="#task-add" v-if="value.user_skill_plan.user_skill_plan.user_remark == ''" @click="planDetails(value.user_skill_plan)" class="btn btn-primary mb-3">Add Remark</button>-->
                            <button type="button" data-toggle="modal" data-target="#task-add" :disabled="checkDate(value.user_skill_plan.user_skill_plan)" v-if="value.user_skill_plan.user_skill_plan.user_remark == ''" @click="planDetails(value.user_skill_plan)" class="btn btn-primary mb-3">Add Remark</button>
                            <button type="button" data-toggle="modal" :disabled="value.rating !=='' && value.rating !== 0 ? true : checkDate(value.user_skill_plan.user_skill_plan)" data-target="#task-add" v-else @click="planDetails(value.user_skill_plan)" class="btn btn-primary mb-3">Edit Remark </button>
                        </div>
                    </div>
                </div>
            </div>
             <div class="row clearfix progress-box" v-else>
                No data found
             </div>
         </div>
       <!-- add task popup start -->
  <div class="modal fade customscroll" id="task-add" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">Update Status</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Close Modal">
                  <span aria-hidden="true">&times;</span>
              </button>
          </div>
          <Form @submit="updateReviewRating" :validation-schema="schema"  v-slot="{ errors }"
           data-vv-scope="addskill">
              <div class="modal-body pd-0">
                  <div class="task-list-form">
                      <ul>
                        <li><div class="form-group row">
                                      <label class="col-md-4">Task Update</label>
                                    <div class="col-md-8">
                                        <span v-for="(point,index) in  formData.user_skill_set_id">
                                          <input type="checkbox" v-model="point.status" v-bind:id="point.id"> {{point.plan_description}}&nbsp;&nbsp;
                                        </span>
                                    </div>
                                  </div>
                                  <div class="form-group row">
                                      <label class="col-md-4">User Remark</label>
                                      <div class="col-md-8">
                                        <Field
                                        name="user_remark"
                                        as="textarea"
                                        placeholder="Enter User Remark"
                                        class="form-control"
                                        :class="{ 'is-invalid': errors.user_remark }"
                                        v-model="formData.user_remark"
                                        ></Field>
                                        <div class="invalid-feedback">{{ errors.user_remark }}</div>
                                          <!-- <input type="text" name="user_remark" v-model="formData.user_remark" placeholder="User Remark" class="form-control date-picker"> -->
                                      </div>
                                  </div>
                                 </li>
                                </ul>
                  </div>
              </div>
              <div class="modal-footer">
                <img v-if="isDisable" src="../../../public/static/images/Spinner-1s-200px.gif" class="btn-loader">
                  <button type="submit" :disabled="isDisable"  class="btn btn-primary">Submit</button>
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
          </Form>
        </div>
    </div>
  </div>
  <!-- add task popup End -->
        </div>
  </template>
  <script>
  // import config from '../../config/app'
  import {useStore} from '../../stores/authStore'
  import { MonthPickerInput } from 'vue-month-picker'
  import userAPI from "../../api/user";
  // import UserProgressChart from '../Chart.vue'
  import * as Yup from "yup";
  import { Form, Field } from "vee-validate";
  
  export default {
  name: 'home',
  components: { Form, MonthPickerInput, Field },
  computed: {
     
    userRole () {
        var role = null
        if (this.userLocalData !== null) {
            role = this.userLocalData.role_id
        }
        return role
    },
    profilePhoto () {
      var profile_photo_path 
        if (this.userLocalData !== null) {
            profile_photo_path = this.userLocalData.profile_photo_path
        }
        return this.bUrl + profile_photo_path
    },
    yearList () {
            var max = new Date().getFullYear() + 1
            var min = 2022
            var years = []
    
            for (var i = min; i <= max; i++) {
                years.push(i)
            }
            
            return years
        }
  },
  methods: {
      checkDate(data) {
            let tgMonth = "'" + data.month + ' 1' + ',' + data.year + "'"
            let currentDate = new Date()
  
            if (new Date(tgMonth).getMonth() == currentDate.getMonth() - 1 && currentDate.getDate() <= 7) {
                return false
            } else {
                return true
            }
        },
      getuserDetails() {
        userAPI.getSingleUser(this.userLocalData.id).then((response) => {
            if (response.status === "success") {
                console.log('current user')
                console.log(response.data)
            this.userName = response.data.first_name + ' ' + response.data.last_name;
            this.designation = response.data.designation.name
            } else {
            this.$toast.show(response.message, {
                type: "error",
            });
            }
        });
        },
        onImageLoadFailure (event, id) {
            document.getElementById(id).src = 'static/images/banner-img.png'
        },
    showDate (date) {
      this.date = date
    },
        getCurrentQuarter () {
          if (this.$route.params.id) {
              this.currentQuarter = $route.params.quarter
          } else {
              var reminder = 12 / this.currentMonth
            if (reminder >= 4) {
                this.currentQuarter = 'q1'
            } else if (reminder >= 2 && reminder < 4) {
                this.currentQuarter = 'q2'
            } else if (reminder >= 2 && reminder < 4) {
                this.currentQuarter = 'q2'
            } else if (reminder >= 1.33 && reminder < 2) {
                this.currentQuarter = 'q3'
            } else if (reminder >= 0 && reminder < 1.33) {
                this.currentQuarter = 'q4'
            }
          }
        },
        getUserPlanDetails () {
            userAPI.getUserPlanDetails({user_id: this.userLocalData.id, quarter: this.currentQuarter, year : this.currentYear}).then((response) => {
                if (response.status === 'success') {
                    this.teamleadDetails = response.data[0]
                    this.userData = []
                    var month = '', user_skill_sets = [], user_skill_plan = []
                    this.teamleadDetails.tasksData.forEach((value, index) => {
                        var total_percentage = 0
                        var task = [], rating, skill = '', leader_review = ''
                        value.tasks_details.forEach((value2, index2) => {
                            if (value2.status == 1) {
                                total_percentage = total_percentage + value2.percentage
                            }    
                            user_skill_sets = value.skill_set
                            task.push({ task: value2.plan_description, percentage : value2.percentage})
                            skill = value2.skill_set.skill_name
                        })
                        month = value.user_skill_plan.month
                        rating = value.user_skill_plan.rating
                        leader_review = value.user_skill_plan.leader_remark
                        user_skill_plan = value                    
                        this.userData.push({total_percentage: total_percentage, month: month, task: task, rating : rating, user_skill_sets: user_skill_sets, skill: skill, leader_review: leader_review, user_skill_plan : user_skill_plan});
                    })
                    console.log('userdata', this.userData)     
                } else {
                    this.$toast.show(response.message, {
                    type: "error",
                    });
                } 
            })
        },
        planDetails (plan_details) {
          console.log('plan_details', plan_details)
           var data =  plan_details.tasks_details
           data.forEach(element => {
              if (element.status == '1') {
                element.status = true
              } else {
                element.status = false
              }
          });
          this.formData.user_skill_set_id = data
          this.formData.user_remark = plan_details.user_skill_plan.user_remark
          this.formData.user_id = plan_details.user_skill_plan.user_id
          this.formData.user_skill_id = plan_details.user_skill_plan.id
        },
        updateReviewRating () {
          this.isDisable = true
          userAPI.updateUserReview(this.formData).then((response) => {
            if (response.status === 'success') {
                this.isDisable = false
                this.$toast.show(response.message, {
                type: "success",
                });
                window.location.reload();
            } else {
                this.isDisable = false
                 this.$toast.show(response.message, {
                type: "error",
                });
            } 
          })
        }
  },
  created() {
      const storeData = useStore()
      this.userLocalData = storeData.authUser
      this.getuserDetails()
      this.getCurrentQuarter()
      this.getUserPlanDetails()
  },
  data() {
    const schema = Yup.object().shape({
    user_remark: Yup.string().required("Remark is required"),
    });
    return {
      isDisable: false,
      userName: '',
      designation: '',
      schema,
      options: {
      chart: {
        height: 280,
        type: "radialBar",
        tear:2020
      },
      colors: ["#20E647"],
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 0,
            size: "70%",
            background: "#293450"
          },
          track: {
            dropShadow: {
              enabled: true,
              top: 2,
              left: 0,
              blur: 4,
              opacity: 0.15
            }
          },
          dataLabels: {
            name: {
              offsetY: -10,
              color: "#fff",
              fontSize: "13px"
            },
            value: {
              color: "#fff",
              fontSize: "30px",
              show: true
            }
          }
        }
        },
        fill: {
            type: "gradient",
            gradient: {
            shade: "dark",
            type: "vertical",
            gradientToColors: ["#87D4F9"],
            stops: [0, 100]
            }
        },
        stroke: {
            lineCap: "round"
        },
        labels: ["Progress"]
        },
      // bUrl:config.server,
      date: {
        from: null,
        to: null,
        month: 'October',
        year: 2022
    },
        formData: {
                user_skill_set_id: [],
                user_remark: '',
                user_id:'',
                user_skill_id:''
        },
        userData: [],
        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        currentYear: new Date().getFullYear(),
        currentMonth: new Date().getMonth(),
        teamleadDetails: [],
        userLocalData: ''
    };
  },
  
  }
  </script>
  <style scoped>
  </style>