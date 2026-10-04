# 🎮 Tic Tac Toe Game

A simple and interactive **Tic Tac Toe game** built using **React.js** and **CSS**.

The game allows two players to enter their names and play Tic Tac Toe with animated effects and a modern responsive design.

---

## 📌 Project Description

This project is a two-player Tic Tac Toe game developed using React.

Player 1 plays with **X** and Player 2 plays with **O**.

* ❌ **X symbol is displayed in Red**
* ⭕ **O symbol is displayed in Green**
* 🎉 Winner is automatically detected
* 🤝 Draw is automatically detected
* 🔄 Game can be restarted
* ✨ Cool animations and hover effects are included
* 📱 Responsive design for mobile and desktop

---

## 🚀 Features

### 👤 Player Names

Before starting the game, both players must enter their names.

```text
Player 1 → X
Player 2 → O
```

The game will not start if either name is empty.

---

### ❌ Red X

Player 1 uses the **X** symbol.

```text
X
```

The X symbol is displayed in red with a glowing effect.

---

### ⭕ Green O

Player 2 uses the **O** symbol.

```text
O
```

The O symbol is displayed in green with a glowing effect.

---

### 🏆 Winner Detection

The game automatically checks all possible winning combinations.

There are 8 possible winning combinations:

* Three rows
* Three columns
* Two diagonals

When a player wins, the winning cells are highlighted with an animation.

---

### 🤝 Draw Detection

If all nine cells are filled and there is no winner, the game displays:

```text
It's a Draw!
```

---

### 🔄 Restart Game

The **Restart Game** button clears the board and starts the same players from the beginning.

X always gets the first turn after restarting.

---

### 🏠 New Game

The **New Game** button clears the board and player names and returns to the player-name screen.

---

### ✨ Animations

The game includes:

* Animated background
* Title animation
* Symbol pop animation
* Cell hover animation
* Button hover effects
* Winner animation
* Winning-cell glow
* Player turn animation
* Game-container entrance animation

---

## 🛠️ Technologies Used

* React.js
* JavaScript
* HTML
* CSS
* Create React App

---

## 📂 Project Structure

```text
tic-tac-toe/
│
├── public/
│
├── src/
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
│
├── package.json
├── package-lock.json
└── README.md
```

---

## 💻 Requirements

Before running the project, install:

* Node.js
* npm
* Visual Studio Code or another code editor
* Web browser

Check Node.js installation:

```bash
node -v
```

Check npm installation:

```bash
npm -v
```

---

## 📥 Installation

### Step 1: Create the React project

```bash
npx create-react-app tic-tac-toe
```

### Step 2: Open the project

```bash
cd tic-tac-toe
```

### Step 3: Install dependencies

```bash
npm install
```

---

## ▶️ Run the Project

Start the development server:

```bash
npm start
```

The application will open in your browser.

Usually it runs at:

```text
http://localhost:3000
```

---

## 🎮 How to Play

### Step 1

Enter the name of **Player 1**.

Player 1 gets:

```text
X
```

### Step 2

Enter the name of **Player 2**.

Player 2 gets:

```text
O
```

### Step 3

Click:

```text
START GAME
```

### Step 4

Player 1 starts the game.

Players take turns clicking empty cells.

### Step 5

Get three of your symbols in a row, column, or diagonal to win.

Example:

```text
X | X | X
---------
O | O |
---------
  |   |
```

Player 1 wins.

---

## 🏆 Winning Patterns

The game checks these patterns:

```text
X | X | X
---------
  |   |
---------
  |   |
```

```text
  |   |
---------
X | X | X
---------
  |   |
```

```text
  |   |
---------
  |   |
---------
X | X | X
```

```text
X |   |
---------
X |   |
---------
X |   |
```

```text
  | X |
---------
  | X |
---------
  | X |
```

```text
  |   | X
---------
  |   | X
---------
  |   | X
```

Diagonal:

```text
X |   |
---------
  | X |
---------
  |   | X
```

Other diagonal:

```text
  |   | X
---------
  | X |
---------
X |   |
```

---

## 📱 Responsive Design

The game is designed to work on:

* 💻 Desktop
* 💻 Laptop
* 📱 Mobile
* 📱 Tablet

The layout automatically adjusts for smaller screens.

---

## 🎨 User Interface

The application uses:

* Dark gradient background
* Glassmorphism cards
* Rounded buttons
* Glowing X and O symbols
* Animated game board
* Responsive layout

---

## 🧠 React Concepts Used

This project demonstrates several React concepts.

### useState

React's `useState()` is used to store:

* Player names
* Game board
* Current player
* Winner
* Winning cells
* Game status

Example:

```javascript
const [currentPlayer, setCurrentPlayer] = useState("X");
```

---

### Event Handling

Click events are handled using:

```javascript
onClick={() => handleCellClick(index)}
```

---

### Conditional Rendering

Different screens are displayed depending on the game state.

For example:

```javascript
if (!gameStarted) {
    return (...);
}
```

---

### Array Methods

The board is displayed using:

```javascript
board.map(...)
```

---

## 🔮 Future Improvements

The project can be extended with:

* 🔊 Sound effects
* 🏆 Scoreboard
* 🥇 Best-of-3 mode
* 🤖 Single-player mode
* 🤖 AI opponent
* 🌙 Light/Dark mode
* 🎵 Background music
* 🏅 Player statistics
* 💾 Local storage
* 🌐 Online multiplayer

---

## 👩‍💻 Author

**Mahalakshmi**

Tic Tac Toe Game developed as a React.js project.

---

## 📄 License


