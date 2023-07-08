// Erstellt FormRules für die Validierung von NForm
// In unserem Beispiel ist T = UITestmodelPost
import type { FormItemRule, FormRules } from "naive-ui";

export class UIFormValidationService {

  public rules<T>(): FormRules {
    const formRules:FormRules = {
      
      number: [
        {
          required: true,
          validator (rule: FormItemRule, value: string) {
            if (!value) {
              return new Error('Age is required')
            } else if (!/^\d*$/.test(value)) {
              return new Error('Age should be an integer')
            } else if (Number(value) < 18) {
              return new Error('Age should be above 18')
            }
            return true
          },
          trigger: ['input', 'blur']
        }
      ],
    };
    
    
    return formRules;
  }
};