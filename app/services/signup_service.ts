import Plan from "#models/plan"

export class SignupService {
  // Your code here
  public async defineMainPage(menu:string){
    if(menu=='plan'){
      const plans= await Plan.query().preload('features').where('billing_cycle','mensal').orderBy('sortPriority', 'asc');
      return plans.map((plan) => plan.serialize())
    }
    return []
  }
  public async defineComponent(componentName:string){
    if(componentName==='monthlyPlan'){
      const plans= await Plan.query().preload('features').where('billing_cycle','mensal').orderBy('sortPriority', 'asc');
      return plans.map((plan) => plan.serialize())
    }
    if(componentName==='annuallyPlan'){
      const plans= await Plan.query().preload('features').where('billing_cycle','anual').orderBy('sortPriority', 'asc');
      return plans.map((plan) => plan.serialize())
    }
  }
}