import type { IUIFirstRequestModel } from './models/IUIFirstRequestModel';


export class RequestHandler {

  public getModel(): Promise<IUIFirstRequestModel> {
    return fetch('http://localhost:5184/get')
        .then(response => response.json())
        .then(response => response as IUIFirstRequestModel);
  }

  public postModel(model: IUIFirstRequestModel): Promise<IUIFirstRequestModel> {
    return fetch('http://localhost:5184/post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(model)
    })
        .then(response => response.json())
        .then(response => response as IUIFirstRequestModel);
  }

  public deleteModel(): Promise<IUIFirstRequestModel> {
    return fetch('http://localhost:5184/delete', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    })
        .then(response => response.json())
        .then(response => response as IUIFirstRequestModel);
  }
}