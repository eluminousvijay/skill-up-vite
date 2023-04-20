
export const calculateEffectiveRating = (userRating, Percentage) => {
  let effectiveRating = Percentage / 100 * userRating
  effectiveRating = Math.round(effectiveRating * 100) / 100
  return effectiveRating
}

export const calculateFinalRating = (data) => {
  let finalRating = data.bug_eff_rating + data.coding_standard_eff_rating
    + data.communication_eff_rating + data.cust_feedback_eff_rating
    + data.html_eff_rating + data.mockup_eff_rating + data.quality_eff_rating + data.task_execution_eff_rating
    + data.tech_dev_eff_rating + data.test_plan_eff_rating + data.tl_eff_rating + data.unit_testing_eff_rating
    // + data.otd_rating_eff_rating
    finalRating = Math.round(finalRating * 100) / 100

  return finalRating
}

export const ratingPercentages = () => {
  const formField =
  {
    otd_rating_eff_rating: 30,

    unit_testing_eff_rating: 20,

    coding_standard_eff_rating: 10,

    communication_eff_rating: 15,

    tech_dev_eff_rating: 15,

    task_execution_eff_rating: 30,

    cust_feedback_eff_rating: 20,

    tl_eff_rating: 10,

    mockup_eff_rating: 20,

    html_eff_rating: 20,

    quality_eff_rating: 15,

    cust_feedback_eff_rating_other: 15,

    bug_eff_rating: 25,

    test_plan_eff_rating: 20,

    quality_eff_rating_other: 10
  }

  return formField
}




