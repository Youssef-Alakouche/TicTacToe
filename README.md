# Tic Tac Toe

A modern Tic Tac Toe game built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**.

## Features

- Play classic Tic Tac Toe (X vs O)
- Edit player names
- Move history with time travel (browse and jump to any move)
- Winner detection and animated overlay
- Responsive, clean UI styled with Tailwind CSS

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/tictactoe.git
   cd tictactoe
   ```

2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```

### Running the App

Start the development server:

```sh
npm run dev
# or
yarn dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

```sh
npm run build
```

### Linting

```sh
npm run lint
```

## Running with Docker

You can also run this app in a Docker container:

1. Build the Docker image:
   ```sh
   docker build -t tictactoe-app .
   ```

2. Run the container:
   ```sh
   docker run -p 5173:5173 tictactoe-app
   ```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

## Customization

- Edit player names by clicking "Edit" next to each player.
- Browse move history using the "Browse Moves" button after a game ends.

## License

MIT

---

Made with ❤️ using React and TypeScript.