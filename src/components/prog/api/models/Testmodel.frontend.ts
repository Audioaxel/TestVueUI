import type { BtoUIModel, UIEditModel } from "@/components/shared/models/UIModel";
import type { ITestmodelPost } from "./Testmodel.backend";


// Specified BtoUIModel -> create formRules for <NForm :rules> 
export type UITestmodelPost = BtoUIModel<ITestmodelPost>;

// Specified UIEditModel -> create working copy and emit to backend
export type UIEditTestmodelPost = UIEditModel<UITestmodelPost>;

