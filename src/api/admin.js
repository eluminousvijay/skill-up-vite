import config from '../config/app'
import axios from 'axios'

const adminAPI = {
    addPlan (data) {
        return new Promise((resolve, reject) => {
            axios.post(config.server + '/api/skill-plan/create', data).then((response) => {
            resolve(response.data)
            }, (error) => {
            reject(error)
            })
        })
    },
    getSkillSet () {
        return new Promise((resolve, reject) => {
            axios.get(config.server + '/api/listing/getSkillSets').then((response) => {
            resolve(response.data)
            }, (error) => {
            reject(error)
            })
        })
    },
    getSkillPlan (pageNo, search) {
        return new Promise((resolve, reject) => {
            axios.post(config.server + '/api/skill-plan/get-all', {page_number: pageNo, search_input: search}).then((response) => {
            resolve(response.data)
            }, (error) => {
            reject(error)
            })
        })
    },
    getSingleSkillPlan (data) {
        return new Promise((resolve, reject) => {
            axios.post(config.server + '/api/skill-plan/find-one/', data).then((response) => {
            resolve(response.data)
            }, (error) => {
            reject(error)
            })
        })
    },
    updateSkillPlan (data) {
        return new Promise((resolve, reject) => {
            axios.post(config.server + '/api/skill-plan/update/', data).then((response) => {
            resolve(response.data)
            }, (error) => {
            reject(error)
            })
        })
    },
    getRatingReviewOld (pageNo) {
        return new Promise((resolve, reject) => {
            axios.post(config.server + '/api/skill-plan/users-rating-list', {page_number : pageNo}).then((response) => {
            resolve(response.data)
            }, (error) => {
            reject(error)
            })
        })
    },
    getRatingReview (data) {
        return new Promise((resolve, reject) => {
            axios.post(config.server + '/api/skill-plan/users-quarter-rating-list', data).then((response) => {
            resolve(response.data)
            }, (error) => {
            reject(error)
            })
        })
    },
    getSkillOverview (data) {
        return new Promise((resolve, reject) => {
            axios.post(config.server + '/api/listing/dashboard', data).then((response) => {
            resolve(response.data)
            }, (error) => {
            reject(error)
            })
        })
    },
    getCountry () {
        return new Promise((resolve, reject) => {
            axios.get(config.server + '/api/listing/get-all-countries').then((response) => {
            resolve(response.data)
            }, (error) => {
            reject(error)
            })
        })
    },
    addClient (data) {
        return new Promise((resolve, reject) => {
            axios.post(config.server + '/api/client/create', data).then((response) => {
            resolve(response.data)
            }, (error) => {
            reject(error)
            })
        })
    },
    updateClient (data) {
        return new Promise((resolve, reject) => {
            axios.post(config.server + '/api/client/update', data).then((response) => {
            resolve(response.data)
            }, (error) => {
            reject(error)
            })
        })
    },
    getClientList (pageNo, search) {
        return new Promise((resolve, reject) => {
            axios.post(config.server + '/api/client/get-all',  {page_number: pageNo, search_input: search}).then((response) => {
            resolve(response.data)
            }, (error) => {
            reject(error)
            })
        })
    },
    getClient (id) {
        return new Promise((resolve, reject) => {
            axios.post(config.server + '/api/client/find-one', {client_id : id}).then((response) => {
            resolve(response.data)
            }, (error) => {
            reject(error)
            })
        })
    },
    getProjectList (page_number, search_input) {
        return new Promise((resolve, reject) => {
            axios.post(config.server + '/api/project/get-all', {page_number : page_number, search_input: search_input}).then((response) => {
            resolve(response.data)
            }, (error) => {
            reject(error)
            })
        })
    },
    addProject (data) {
        return new Promise((resolve, reject) => {
            var path
            if (data.project_id !=='') {
                path = '/api/project/update'
            } else {
                path = '/api/project/create'
            }
            axios.post(config.server + path, data).then((response) => {
            resolve(response.data)
            }, (error) => {
            reject(error)
            })
        })
    },
    getProject (id) { 
        return new Promise((resolve, reject) => {
            axios.post(config.server + '/api/project/find-one', {project_id : id}).then((response) => {
            resolve(response.data)
            }, (error) => {
            reject(error)
            })
        })
    },
    addFinalRating (data) {
        return new Promise((resolve, reject) => {
            axios.post(config.server + '/api/listing/addFinalRating', data).then((response) => {
            resolve(response.data)
            }, (error) => {
            reject(error)
            })
        })
    },
    getFinalRating (data) {
        return new Promise((resolve, reject) => {
            axios.post(config.server + '/api/listing/findRating', data).then((response) => {
            resolve(response.data)
            }, (error) => {
            reject(error)
            })
        })
    },
   
}

export default adminAPI