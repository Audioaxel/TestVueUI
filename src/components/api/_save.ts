export class SimpleRequestHandler1 {

    public handleApiGet(): Promise<string> {
      return fetch('http://localhost:5184')
        .then(response => response.json())
        .then(data => JSON.stringify(data));
    }
  
    public handleApiPost(): Promise<any> {
      const postData = {
        testString: "Hello API!"
      };
    
      return fetch('http://localhost:5184', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
      })
        .then(response => response.json())
        .then(data => {
          // Hier kannst du die Antwortdaten verarbeiten
          console.log('API-Antwort:', data);
        })
        .catch(error => {
          // Hier kannst du Fehler behandeln
          console.error('Fehler bei der API-Anfrage:', error);
        });
    }
  }