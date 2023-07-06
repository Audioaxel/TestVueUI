export class RequestHandler<TModel> {

  public getModel(): Promise<TModel> {
    return fetch('http://localhost:5184/get')
      .then(response => response.json())
      .then(response => response as TModel);
  }

  public postModel(model: TModel): Promise<TModel> {
    return fetch('http://localhost:5184/post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(model)
    })
      .then(response => response.json())
      .then(response => response as TModel);
  }

  public deleteModel(): Promise<TModel> {
    return fetch('http://localhost:5184/delete', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(response => response.json())
      .then(response => response as TModel);
  }
}