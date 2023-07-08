export interface IUITestmodelPost {
    text: string | null;
    number: string | null;
    reset(): void;
}

// export type UITestmodelPost = IUITestmodelPost & IModel<IUITestmodelPost>;