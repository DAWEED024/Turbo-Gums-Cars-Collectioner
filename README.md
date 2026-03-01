Turbo Cards Collection App

A web application for managing a private collection of Turbo chewing gum cards (160+ models, including variants).

This project allows users to browse all cards in a responsive grid, track owned cards and duplicates, view live statistics (unique / total / missing), search by ID, brand, or model, import and export collection data (JSON), and work fully offline using localStorage.

⸻

Features
	•	Responsive layout (mobile / tablet / desktop)
	•	Fixed card aspect ratio (340×345 slot)
	•	No image cropping (object-fit: contain)
	•	Duplicate support (qty per card)
	•	Variant support (e.g., dual #119 implementation)
	•	Persistent storage via localStorage
	•	JSON backup / restore
	•	Subtle status indicators (owned / missing / duplicates)

⸻

Project Structure

/
├── index.html
├── styles.css
├── app.js
└── assets/
  └── cards/
    ├── 001.png
    ├── 002.png
    ├── …
    ├── 119.png
    ├── 119s.png
    └── 160.png

⸻

Running Locally

You can open index.html directly in a browser.

For best results, use a simple local server (recommended):

npx serve

or use VS Code Live Server.

⸻

Data Persistence

All collection data is stored locally in the browser via localStorage.
No external backend or server is used.

⸻

License

Copyright (c) 2025 Dawid Woźniak

All rights reserved.

This software and its source code may not be copied, modified, distributed, or used commercially without explicit written permission of the author.
