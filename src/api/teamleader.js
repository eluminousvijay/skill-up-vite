import config from '../config/app'
import axios from 'axios'

const teamleadAPI = {
    addTechnicalPlan (data) {
        return new Promise((resolve, reject) => {
            axios.post(config.server + '/api/myteam/addUserSkillPlan', data).then((response) => {
            resolve(response.data)
            }, (error) => {
            reject(error)
            })
        })
    },
    myTeamList (data) {
        return new Promise((resolve, reject) => {
            axios.post(config.server + '/api/myteam/list', data).then((response) => {
            resolve(response.data)
            }, (error) => {
            reject(error)
            })
        })
    },
    getPlanDetails (data) {
        return new Promise((resolve, reject) => {
            axios.post(config.server + '/api/myteam/teamPlanDetails', data).then((response) => {
            resolve(response.data)
            }, (error) => {
            reject(error)
            })
        })
    },
    getUserPlan (leaderId,userId,skillId) {
        return new Promise((resolve, reject) => {
            axios.post(config.server + '/api/myteam/user-plan-lists', {id : leaderId,user_id: userId, skill_plan_id : skillId}).then((response) => {
            resolve(response.data)
            }, (error) => {
            reject(error)
            })
        })
    },
    updateReviewRating (data) {
        return new Promise((resolve, reject) => {
            axios.put(config.server + '/api/myteam/update-review-rating/' + data.leader_id + '/' + data.user_skill_plan_id, data).then((response) => {
            resolve(response.data)
            }, (error) => {
            reject(error)
            })
        })
    },
    getRatingReview (id, pageNo,month, search_input) {
        return new Promise((resolve, reject) => {
            axios.post(config.server + '/api/skill-plan/users-rating-list', {leader_id : id, page_number : pageNo, month: month, username:search_input}).then((response) => {
            resolve(response.data)
            }, (error) => {
            reject(error)
            })
        })
    },
    getTeamLeaderOverview (data) {
        return new Promise((resolve, reject) => {
            axios.post(config.server + '/api/dashboard/leader', data).then((response) => {
            resolve(response.data)
            }, (error) => {
            reject(error)
            })
        })
    },
    updateTlAuditReview (data) {
        return new Promise((resolve, reject) => {
            axios.post(config.server + '/api/listing/update-audit-reviews', data).then((response) => {
            resolve(response.data)
            }, (error) => {
            reject(error)
            })
        })
    },
    updateTechnicalPlan (data) {
        return new Promise((resolve, reject) => {
            axios.post(config.server + '/api/myteam/editUserSkillPlan', data).then((response) => {
            resolve(response.data)
            }, (error) => {
            reject(error)
            })
        })
    },
}

export default teamleadAPI