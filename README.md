# Lyrify 🎶

**Empower your creativity!** Lyrify is a lyrics-writing tool designed for musicians, songwriters, and creatives. With its seamless interface, it helps you write, organize, and elevate your music.

---

## Features

- 📝 **Write and Edit Lyrics**: A user-friendly editor to craft your words.
- 🎵 **Upload Instrumental Beats**: Pair your lyrics with your favorite tunes.
- 🔖 **Manage Your Songs**: Save and organize all your creations in one place.

---

## Tech Stack

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **File Storage**: AWS S3 (for instrumental beats)
- **Authentication**: Firebase Authentication

---

## Installation

Follow these steps to set up the project locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/SUDIP10K89/LYRIFY.git
   cd lyrify
   ```

2. **Install dependencies:**
   ```bash
   npm install
   cd client && npm install
   ```

3. **Set up environment variables:**
   - Create a `.env` file in the root directory and add the following:
     ```env
     MONGO_URI=<your-mongodb-uri>
     AWS_ACCESS_KEY=<your-aws-access-key>
     AWS_SECRET_KEY=<your-aws-secret-key>
     FIREBASE_API_KEY=<your-firebase-api-key>
     ```

4. **Run the application:**
   ```bash
   npm run dev
   ```

---

## Usage

- Open the app in your browser at `http://localhost:3000`.
- Start by adding a title, writing lyrics, and uploading instrumental beats.
- Save and manage your songs effortlessly.

---

## Contributing

We welcome contributions! Follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Acknowledgments

- Thanks to the open-source community for their amazing libraries and tools.
- Inspired by the passion of musicians and songwriters worldwide.

---

Feel free to reach out for feedback or suggestions!
