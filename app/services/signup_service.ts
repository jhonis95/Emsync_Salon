import Plan from '#models/plan'

export class SignupService {
  // Your code here
  public async defineMainPage(menu: string) {
    if (menu == 'plan') {
      const monthyPlans = await Plan.query()
      .preload('features')
      .where('billing_cycle', 'mensal')
      .orderBy('sortPriority', 'asc')
      
      const annuallyPlans = await Plan.query()
      .preload('features')
      .where('billing_cycle', 'anual')
      .orderBy('sortPriority', 'asc')
      
      const plans={
        monthlyBilling:monthyPlans.map((plan) => plan.serialize()),
        annuallyBilling:annuallyPlans.map((plan) => plan.serialize())
      }
      return plans

    }
    return []
  }
  
}
