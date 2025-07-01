---
title: Movie Poll Website
subtitle: An interactive polling platform that helps users decide what movie to watch next together.
tags: ["SvelteKit", "MongoDB Atlas", "Open Movie Database API", "JavaScript", "CSS"]
codeUrl: https://voting.fly.dev/
codeButtonText: Visit Site →
primaryColor: blue
secondaryColor: cyan
gradientColor: from-blue-500 to-cyan-500
accentColor: text-blue-600
accentBg: bg-blue-100
primaryHex: "#3b82f6"
secondaryHex: "#06b6d4"
accentLightHex: "#dbeafe"
---

# Project Overview
The Movie Poll Website is a full-stack web application that allows users to create and participate in movie-related polls. Built with modern web technologies, it features a unique user interface and robust backend functionality powered by external API integration.

The platform integrates with the Open Movie Database (OMDb) API to provide rich movie metadata, including posters, plot summaries, and other relevant information. This ensures that users have access to comprehensive movie information when creating or voting in polls.

# Key Features

| Feature | Description |
|---|---|
| Interactive Polling System | Create custom movie polls with multiple options and real-time voting capabilities |
| Rich Movie Data | Automatic movie information retrieval including posters, descriptions, and metadata |
| Responsive Design | Optimized for all devices with a mobile-first approach and intuitive interface |
| Cloud Database | Persistent data storage with MongoDB Atlas for reliable poll and vote management |

# Technical Implementation

### Frontend Development
Built with SvelteKit, the frontend leverages Svelte's reactive programming model to create a smooth, interactive user experience. The component-based architecture ensures maintainable code and reusable UI elements.

*   Reactive state management for real-time poll updates
*   Component-based architecture for modularity
*   Server-side rendering for improved SEO and performance
*   Modern CSS with responsive design principles

### Backend & Database
The backend utilizes MongoDB Atlas for cloud-based data persistence, ensuring scalability and reliability. RESTful API endpoints handle poll creation, voting, and data retrieval operations.

*   MongoDB Atlas for scalable cloud storage
*   RESTful API design for clean data operations
*   External API integration with OMDb
*   Data validation and error handling

# Challenges & Solutions

### Real-time Updates
**Challenge:** Ensuring poll results update in real-time across multiple users.
**Solution:** Leveraged Socket.io for real-time communication, allowing instant updates to poll results without page refreshes.

# Key Learnings

### Technical Skills
*   SvelteKit development and SSR implementation
*   MongoDB Atlas cloud database management
*   RESTful API design and external service integration
*   Responsive web design and cross-platform compatibility

### Soft Skills
*   Project planning and feature prioritization
*   Problem-solving and debugging complex issues
*   User experience design considerations
*   Performance optimization and scalability planning
