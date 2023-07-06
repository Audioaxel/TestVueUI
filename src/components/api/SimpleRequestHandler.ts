


export class SimpleRequestHandler {
  public handleApiGet(): Promise<string> {
    return fetch('http://localhost:5184')
      .then(response => response.json())
      .then(data => JSON.stringify(data));
  }
}

  