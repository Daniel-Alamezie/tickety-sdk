# Tickety SDK

Tickety SDK is a powerful and flexible package designed to integrate a comprehensive ticket management system into your SaaS applications. This SDK simplifies the process of adding customer support and ticket handling capabilities, allowing developers to focus on building core features. With easy-to-use methods for sending messages, fetching conversations, and managing tickets, Tickety SDK offers a seamless experience for both developers and end-users.

## Features

- **Send Messages**: Easily send messages from your application to the Tickety dashboard.
- **Fetch Messages**: Retrieve conversation history to display in your application.
- **Real-time Updates**: Stay updated with the latest messages (requires implementation of polling or another method to fetch updates).
- **Customizable**: Wrap the SDK functions in any UI to match your brand and style.

## Installation

Install Tickety SDK with npm:

```bash
npm install tickety-sdk

```

Or with yarn:

```bash
yarn add tickety-sdk

```

## Initialisation

Before using the SDK, you must initialize it with your API key, which you can obtain from your Tickety dashboard

```bash
import Tickety from 'tickety-sdk';

const ticket = new Tickety('YOUR_API_KEY');

```

## Usage

### Sending Messages

To send a message to the Tickety dashboard:

```bash
const response = await ticket.sendMessage("Your message here", "USER_AUTH_TOKEN");
if (response.success) {
  console.log("Message sent successfully");
} else {
  console.error("Failed to send message:", response.error);
}

```

## Fetching Message

To fetch messages between your application and a user:

```bash
const messages = await ticket.fetchMessage("USER_AUTH_TOKEN");
if (messages.success) {
  console.log("Messages fetched successfully", messages.data);
} else {
  console.error("Failed to fetch messages:", messages.error);
}

```

# Handling Real-time Updates

Tickety's dashboard leverages Supabase Realtime to provide you with instant updates on customer interactions and ticket statuses. This means that as a developer, you can experience real-time messaging directly within the Tickety dashboard, ensuring that you're always informed about the latest customer queries and feedback without any delay.

## Current Real-time Implementation

Our current implementation utilizes Supabase Realtime capabilities on the dashboard, offering:

- Instant Notifications: Get alerted immediately when new tickets are created or when there are updates to existing tickets.
- Live Ticket Updates: See real-time changes in ticket status, ensuring efficient tracking and management of customer support interactions.

This feature is designed to enhance your experience by providing immediate insights into customer interactions, enabling you to respond promptly and effectively.

# Roadmap: Real-time Functionality in SDK

Understanding the value of real-time updates not just on the dashboard but also directly within your applications, we're excited to share that integrating real-time updates into the Tickety SDK functions is on our development roadmap. This will allow you to implement real-time messaging features directly in your SaaS applications, providing end-users with an enhanced and engaging experience.

Until this functionality is available, we recommend using the polling method as an interim solution for updating your applications with the latest messages and ticket statuses. Here's a guide to implement polling in your application:

```bash
// Example of a polling function to check for new messages every 5 seconds
function pollForUpdates() {
  setInterval(async () => {
    // Replace 'yourTicketId' with the actual ticket ID you are monitoring
    const updates = await tickety.fetchMessage('yourAuthToken', { ticketId: 'yourTicketId' });
    if (updates.success && updates.data.length > 0) {
      console.log('New updates:', updates.data);
      // Process updates here (e.g., refresh the UI)
    }
  }, 5000); // Adjust the interval as needed
}

```

We're committed to enhancing Tickety's capabilities and providing developers with the tools needed for seamless integration and superior user experience. Stay tuned for updates on the integration of real-time functionality into our SDK!

# Support

If you encounter any issues or have questions, please file an issue on the GitHub repository.

# License

Tickety SDK is MIT licensed.

```bash

This structured Markdown text includes headers, code blocks, lists, and bold text to organize the information in a way that's easy to read and understand. Make sure to replace placeholder texts like `'YOUR_API_KEY'` and `'USER_AUTH_TOKEN'` with actual values or further instructions as needed.

```
