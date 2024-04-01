export default class Tickety {
  private apiKey: string;
  constructor(apiKey: string) {
    if (!apiKey) {

      throw new Error('You must provide an API key to initialize Tickety.');
    }

    this.apiKey = apiKey

  }

  public async sendMessage(messageContent: String, authToken: string): Promise<any> {

    try {
      const response = await fetch(`https://www.tickety.dev/api/tickety/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`, // User's authToken
          'x-api-key': this.apiKey, // Your service's API key provided to developers
        },
        body: JSON.stringify({ messageContent })
      });
      const data = await response.json();

      if (!response.ok) {
        return { success: false, starusCode: response.status, error: data };
      }
      return { success: true, statusCode: response.status, data }; // This should be the response from your Next.js API
    } catch (error) {
      return { success: false, statusCode: 0, error: 'There was a problem sending the message with Tickety' };
    }

  }

  public async fetchMessage(authToken: string, options: { page?: number; pageSize?: number } = {}) {
    const { page = 1, pageSize = 10 } = options;
    try {
      const response = await fetch(`http://localhost:3000/api/tickety/fetchMessage`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`, // User's authToken
          'x-api-key': this.apiKey, // Your service's API key provided to developers
        },
      })

      const data = await response.json();

      if (!response.ok) {
        return { success: false, starusCode: response.status, error: data };
      }
      return { success: true, statusCode: response.status, data };

    } catch (error) {
      return { success: false, statusCode: 0, error: 'There was a problem fetching the messages with Tickety' };

    }
  }

}