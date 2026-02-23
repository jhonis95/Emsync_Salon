import Plan from "#models/plan"

export class SignupService {
  // Your code here
  public async defineContentMain(menu:string){
    if(menu=='plan'){
      const plans= await Plan.query().preload('features').where('billing_cycle','mensal').orderBy('sortPriority', 'asc');
      return plans.map((plan) => plan.serialize())
    }
    return []
  }
}