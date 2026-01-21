# Quick Setup Guide - Easiest Way! 🚀

## Option 1: Use the Lightweight Archive (29KB!)

```bash
# Download and extract
tar -xzf website-source.tar.gz
cd website-source

# Install dependencies (one time)
npm install

# Test locally
npm start
```

---

## Option 2: Even Better - Clone & Edit on GitHub!

### Step 1: Push to Your Repo

```bash
# Clone your repo
git clone https://github.com/Sridhar-97k/sridhar97k.github.io.git
cd sridhar97k.github.io

# Create React app structure
npx create-react-app .

# Now copy the src files I gave you into the src/ folder
# Copy package.json settings
```

### Step 2: Edit Files Directly on GitHub

Once pushed, you can edit files directly in GitHub's web interface:
1. Go to your repo: `https://github.com/Sridhar-97k/sridhar97k.github.io`
2. Click on any file (e.g., `src/components/About.js`)
3. Click the pencil ✏️ icon to edit
4. Make changes
5. Click "Commit changes"
6. Run `npm run deploy` from your local machine

---

## Option 3: Use VS Code or Any Editor

```bash
# Clone your repo
git clone https://github.com/Sridhar-97k/sridhar97k.github.io.git
cd sridhar97k.github.io

# Open in VS Code
code .

# Or use any editor you like!
```

Then just edit the files in `src/components/` directly!

---

## Files You'll Edit Most Often:

### 📝 Content Files (Easy to Edit!)

**`src/components/About.js`** - Your bio
**`src/components/Experience.js`** - Work history
**`src/components/Projects.js`** - Your projects
**`src/components/Skills.js`** - Technical skills
**`src/components/Links.js`** - Social media links

### 🎨 Styling Files (If you want to change colors)

**`src/components/Header.css`** - Header colors
**`src/App.css`** - Background gradient

---

## Quick Edits You Might Want:

### Change Your Bio:
Open `src/components/About.js` and edit line 7-12

### Add a Project:
Open `src/components/Projects.js` and add to the array:
```javascript
{
  title: 'New Project',
  description: 'Description here',
  tags: ['Tag1', 'Tag2']
}
```

### Change Colors:
Find `#667eea` and `#764ba2` in CSS files and replace with your colors!

---

## Deploy After Changes:

```bash
git add .
git commit -m "Updated content"
git push
npm run deploy
```

That's it! 🎉
