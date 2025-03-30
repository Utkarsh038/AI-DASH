# Data Query Dashboard Prototype

## Objective

The goal of this project is to develop a React-based dashboard prototype for a Gen AI Analytics tool that simulates query interactions and displays results. The primary focus is on creating an interactive dashboard with a natural language query input, a simulated query processing system, and a result display with data visualization.

---

## Features

- **Natural Language Query Input:** Users can type queries, with AI-powered suggestions for query completion.
- **Query History Section:** Displays previously submitted queries for easy access.
- **Results Display Area:** Visualize mock query results with charts (using Recharts or Chart.js).
- **Loading and Error States:** Appropriate indicators for loading processes and error handling.

---

## Technical Requirements

- **Single Page Application (SPA):** The application is built as an SPA for a seamless user experience.
- **State Management:** Redux is used for managing the global state, handling query submissions, and processing result states.
- **Data Visualization:** Mock data is visualized using charts.
- **Responsive Design:** A mobile-friendly, responsive UI to ensure usability across devices.

---

## Technical Stack

- **Frontend:** React.js
- **State Management:** Redux
- **Styling:** Tailwind CSS or Material-UI
- **Data Visualization (Optional):** Recharts or Chart.js for displaying query results in a chart
- **Hosting:** [Netlify](https://www.netlify.com/) or [Vercel](https://vercel.com/) (recommended platforms for deployment)

---

## Setup Instructions

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/AI-DASH.git
    cd AI-DASH
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the development server:

    ```bash
    npm start
    ```

    This will run the application locally at `http://localhost:5173`.

---

## Deployment

This project is deployed on [Vercel](https://vercel.com/) (or your preferred platform). You can access the live version of the application at the following URL:

- [Live Demo Link](https://ai-dash-six.vercel.app/)

---

## State Management

The global state is managed using Redux. It handles:

- Query submission
- Query processing states (loading, success, error)
- Result display states

### Redux Actions & Reducers

- `submitQuery`: Action to submit a new query.
- `processQuery`: Action to simulate query processing.
- `receiveResults`: Action to display query results (mock data).
- `handleError`: Action to display error messages if something goes wrong.

---

## UI Components

### 1. Query Input Field
- Accepts user input and provides AI-powered query suggestions.

### 2. Query History
- Displays a list of previously submitted queries.

### 3. Results Display
- Shows the results of the query in a mock data visualization (chart).

### 4. Loading/Error States
- Loading indicator while processing the query.
- Error message if something goes wrong.

---

## Design Considerations

- **UI/UX:** The design is modern, clean, and intuitive, with a focus on a great user experience. It is fully responsive to support all device sizes.
- **Accessibility:** Basic accessibility features such as focus states, semantic HTML, and ARIA labels are included.
- **Consistency:** The UI follows consistent design patterns to enhance usability.

---



## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
