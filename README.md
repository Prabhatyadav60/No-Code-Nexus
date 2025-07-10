# NoCodeNexus

**Build & Deploy Websites with Just Prompts!**
NoCodeNexus is an AI-driven, no-code website builder that lets you craft, preview, and publish fully functional websites by simply typing your design and content prompts.

---
![image](https://github.com/user-attachments/assets/eb635941-e1a6-455b-b548-8d3d1183474c)

## 🚀 Features

* **Prompt-Driven Design**
  Describe your vision (e.g., “Change header color to teal”, “Add a three-column feature grid”) and watch your live preview update instantly.

* **Real-Time Preview**
  Edit your HTML/CSS/JS in seconds and see changes across desktop, tablet, and mobile breakpoints.

* **One-Click Deployment**
  Automatically generate a GitHub Pages repo for your site and get a live URL—no manual git commands required.

* **Image Upload & Live Linking**
  Upload assets (via Cloudinary) and inject them into your site with copy-paste URLs.

* **Dark & Light Modes**
  Built-in theme toggling so you can design in your preferred palette.

---



## 🏗️ Architecture

```text
[ index.html + viewer.html Frontend ] ←→ [ Chatbot FastAPI ] ←→ OpenAI (LangChain + LangGraph)
                                          ↓
                                     [ GitHub Automation FastAPI ]
                                          ↓
                                   GitHub Pages Repository
```

1. **Chatbot FastAPI**

   * Endpoint: `POST /chat`
   * Uses LangChain + LangGraph to maintain conversation memory and generate HTML/CSS/JS patch responses.

2. **GitHub Automation FastAPI**

   * Endpoint: `POST /deploy`
   * Creates a new GitHub repo, commits the provided HTML bundle, and returns the GitHub Pages URL.

3. **Frontend**

   * **index.html**: Marketing landing page with “Try It Free” → viewer
   * **viewer.html**: Live AI editor interface with preview pane, command panel, image upload, and deploy button
   * **published.html**: Deployment confirmation page with countdown, confetti, and live-link unlock

---

## 📋 Prerequisites

* **Node.js ≥ 14** (for Tailwind CDN; no build step required)
* **Python 3.9+**
* **Pip**
* **Git**
* **Cloudinary account** (for unsigned image uploads)

---


## 🎯 Usage

1. **Try the Live AI Editor**

   * Navigate to `viewer.html`
   * Type a design/content command (e.g., “Add a sticky navbar with links to Home, About, Contact”)
   * Click **Send** and watch your preview update in real time.

2. **Upload Images**

   * Select a file, click **Upload to Get a live link**, then copy the secure URL into your prompt.

3. **Deploy Your Site**

   * Click **🚀 Publish**, enter a repo name (e.g., `my-portfolio`), and confirm.
   * After a short build countdown, you’ll receive your GitHub Pages URL.

4. **View Published Site**

   * Access the link under **Visit Your Site** once the countdown completes.

---

## 🤝 Contributing

Contributions are welcome! If you’d like to:
1. Fork the project
2. Create your feature branch (`git checkout -b feature/foo`)
3. Commit your changes (`git commit -am 'Add foo feature'`)
4. Push to the branch (`git push origin feature/foo`)
5. Open a Pull Request
6. To understand this repo in better way first visit these two repo
7. I https://github.com/Prabhatyadav60/advance-chatbot-fast-api
8. II https://github.com/Prabhatyadav60/Github-deploy-automation-fast-api
   
 

---



## 📬 Contact

* **Maintainer**: Prabhat Yadav
* **Email**: [prabhatyadav6386@gmail.com](mailto:prabhatyadav6386@gmail.com)


---

*NoCodeNexus — Empowering everyone to build and deploy beautiful websites in seconds.*
