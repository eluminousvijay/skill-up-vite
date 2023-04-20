import config from '../config/app'
import axios from 'axios'

const userAPI = {
    registerUser (data) {
        return new Promise((resolve, reject) => {
            axios.post(config.server + '/api/user/create', data).then((response) => {
            resolve(response.data)
            }, (error) => {
            reject(error)
            })
        })
    },
    loginUser (data) {
        return new Promise((resolve, reject) => {
            axios.post(config.server + '/api/user/login', data).then((response) => {
            resolve(response.data)
            }, (error) => {
            reject(error)
            })
        })
    },
    roles () {
        return new Promise((resolve, reject) => {
            axios.get(config.server + '/api/listing/getRoles').then((response) => {
            resolve(response.data)
            }, (error) => {
            reject(error)
            })
        })
    },
    getUserList (page_number, search_input) {
        return new Promise((resolve, reject) => {
            // axios.defaults.headers.common[
            //     "Authorization"
            //   ] = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXN1bHQiOnsiaWQiOjQsInJvbGVfaWQiOjQsImRlc2lnbmF0aW9uX2lkIjpudWxsLCJkZXBhcnRtZW50X2lkIjpudWxsLCJmaXJzdF9uYW1lIjoia3Jpc2giLCJsYXN0X25hbWUiOiJHIiwiZW1haWwiOiJrcmlzaDFAZ21haWwuY29tIiwidXNlcl9hZGRyZXNzIjpudWxsLCJwYXNzd29yZCI6IiQyYiQxMCRpUExPNDJjWTFBUWdsZkUvWlVaamMua3B5WklkeUF6VmxtRGVuenc1OExEVEVTbzJGTmtSLiIsInN0YXR1cyI6IjEiLCJjcmVhdGVkX2F0IjoiMjAyMi0xMC0wM1QwNzowNjoyMy4wMDBaIiwidXBkYXRlZF9hdCI6IjIwMjItMTAtMDNUMDc6MDY6MjMuMDAwWiIsImRlbGV0ZWRfYXQiOm51bGx9LCJpYXQiOjE2NjUxMTk0NjZ9.yHDuVkFvX1HUC44Rc2auML1f819unmNl2mSxjIFAMMc`;
            axios.post(config.server + '/api/user/allUsers', {page_number : page_number, search_input: search_input}).then((response) => {
            resolve(response.data)
            }, (error) => {
            reject(error)
            })
        })
    },
    getDesignationList () {
        return new Promise((resolve, reject) => {
            axios.get(config.server + '/api/listing/getDesignations').then((response) => {
            resolve(response.data)
            }, (error) => {
            reject(error)
            })
        })
    },
    getDepartmentList () {
        return new Promise((resolve, reject) => {
            axios.get(config.server + '/api/listing/getDepartments').then((response) => {
            resolve(response.data)
            }, (error) => {
            reject(error)
            })
        })
    },
    getSingleUser (data) {
        return new Promise((resolve, reject) => {
            axios.get(config.server + '/api/user/getUserById/' + data ).then((response) => {
            resolve(response.data)
            }, (error) => {
            reject(error)
            })
        })
    },
    updateUser (data, id) {
        return new Promise((resolve, reject) => {
            axios.put(config.server + '/api/user/update/'+ id, data).then((response) => {
            resolve(response.data)
            }, (error) => {
            reject(error)
            })
        })
    },
    getUserPlan (userId, pageNo) {
        console.log('here')
        return new Promise((resolve, reject) => {
            // axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
            axios.post(config.server + '/api/listing/user-plan-listing', {user_id: userId, page_number: pageNo}).then((response) => {
            resolve(response.data)
            }, (error) => {
            reject(error)
            })
        })
    },
    updateUserReview (data) {
        return new Promise((resolve, reject) => {
            axios.put(config.server + '/api/listing/user-plan-update/' + data.user_id + '/' + data.user_skill_id, data).then((response) => {
            resolve(response.data)
            }, (error) => {
            reject(error)
            })
        })
    },
    getUserPlanDetails (data) {
        return new Promise((resolve, reject) => {
            axios.post(config.server + '/api/user/quarter-details', data).then((response) => {
            resolve(response.data)
            }, (error) => {
            reject(error)
            })
        })
    },
    projectList (data) {
        return new Promise((resolve, reject) => {
            axios.post(config.server + '/api/project/get-all', data).then((response) => {
            resolve(response.data)
            }, (error) => {
            reject(error)
            })
        })
    },
    submitAudit (data) {
        return new Promise((resolve, reject) => {
            axios.post(config.server + '/api/audit/add', data).then((response) => {
            resolve(response.data)
            }, (error) => {
            reject(error)
            })
        })
    },
    getAuditList (data) {
        return new Promise((resolve, reject) => {
            axios.post(config.server + '/api/listing/get-user-audit', data).then((response) => {
            resolve(response.data)
            }, (error) => {
            reject(error)
            })
        })
    },
    getAllAuditList (data) {
        return new Promise((resolve, reject) => {
            axios.post(config.server + '/api/listing/get-all-audit', data).then((response) => {
            resolve(response.data)
            }, (error) => {
            reject(error)
            })
        })
    },
    getTlAuditList (data) {
        return new Promise((resolve, reject) => {
            axios.post(config.server + '/api/audit/getTLAuditListing', data).then((response) => {
            resolve(response.data)
            }, (error) => {
            reject(error)
            })
        })
    },
    getSingleAudit (id) {
        return new Promise((resolve, reject) => {
            axios.post(config.server + '/api/listing/edit-audit/' , {audit_id : id} ).then((response) => {
            resolve(response.data)
            }, (error) => {
            reject(error)
            })
        })
    },

    updateAudit (data) {
        return new Promise((resolve, reject) => {
            axios.post(config.server + '/api/listing/update-audit/', data).then((response) => {
            resolve(response.data)
            }, (error) => {
            reject(error)
            })
        })
    },

     changePassword (data) {
        return new Promise((resolve, reject) => {
            axios.post(config.server + '/api/user/change-password', data).then((response) => {
            resolve(response.data)
            }, (error) => {
            reject(error)
            })
        })
    },

    forgotPassword (data) {
        return new Promise((resolve, reject) => {
            axios.post(config.server + '/api/user/forgot-password/', data).then((response) => {
            resolve(response.data)
            }, (error) => {
            reject(error)
            })
        })
    },
    resetPassword (data, token) {
         return new Promise((resolve, reject) => {
         axios.post(config.server + '/api/user/reset-password/'+ token, data).then((response) => {
                console.log('',data)
            resolve(response.data)
            }, (error) => {
            reject(error)
            })
        })
    },

  
}

export default userAPI