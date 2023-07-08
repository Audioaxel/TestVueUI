// Erstellt FormRules für die Validierung von NForm
// In unserem Beispiel ist T = UITestmodelPost
import type { FormRules } from "naive-ui";

export class UIFormValidationService {

  public rules<T>(): FormRules {
    const formRules:FormRules = {};
    
    return formRules;
  }
};