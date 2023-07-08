import type { BtoUIModel, UIEditModel } from "@/components/shared/models/UIModel";
import type { ITestmodelPost } from "./Testmodel.backend";


export interface IUITestmodelPost {
    text: string | null;
    number: string | null;
    reset(): void;
}

// Specified BtoUIModel -> create formRules for <NForm :rules> 
export type UITestmodelPost = BtoUIModel<ITestmodelPost>;

// Specified UIEditModel -> create working copy to emit to backend on submit
export type UIEditTestmodelPost = UIEditModel<UITestmodelPost>;

