
# Portfolio Editing Guide

Welcome! This guide will help you manage your portfolio content, including text and images, so you can keep everything up-to-date yourself.

## 1. Editing Text Content
Most of the core information (Experience, Projects, Tools) is stored in a single file to make it easy for you to edit.

- **File Location**: `constants.tsx` ([Open File](file:///Users/stephanielouiselucena/Downloads/stephanie-lucena-portfolio/constants.tsx))
- **How to Edit**: 
    - Open the file.
    - Find the arrays like `EXPERIENCES`, `CASE_STUDIES`, or `TOOLS`.
    - Change the text inside the `"quotes"`. 
    - Save the file and the website will update automatically in your browser.

## 2. Managing Images (Photos)
To add or change photos (like case study thumbnails), follow these steps:

### Step A: Save your images
Put all your website images into the `public/` folder.
- **Folder Location**: `public/` ([Open Folder](file:///Users/stephanielouiselucena/Downloads/stephanie-lucena-portfolio/public))
- **Tip**: Use clear names like `ray-ban-thumbnail.jpg`.

### Step B: Link them in the code
In `constants.tsx`, look for the `image` property in the `CASE_STUDIES` array.
- **Example**: If you saved a photo as `launch-hero.png`, you would update the code to:
  ```typescript
  image: "/launch-hero.png" // The / points to the public folder
  ```

## 3. Editing the About Page
Some specific text on the About page is inside its own file.
- **File Location**: `pages/About.tsx` ([Open File](file:///Users/stephanielouiselucena/Downloads/stephanie-lucena-portfolio/pages/About.tsx))
- **How to Edit**: Simply find the paragraph or heading you want to change and edit the text between the HTML tags (like `<p>Actual text here</p>`).

## 4. Troubleshooting
- **Website didn't update?** Make sure you saved the file in your editor (Cmd+S).
- **Error in the code?** If the screen goes white or shows an error, check if you accidentally deleted a comma `,` or a bracket `]`. My previous edits were made to be robust!

## 5. Going Live (Deployment)
To make your website public and connect your domain, the easiest way is using **Vercel**. It's free and perfect for this type of project.

### Step A: Upload to GitHub
1. Create a free account on [GitHub.com](https://github.com).
2. Create a new "Repository" (private or public).
3. Follow the instructions on GitHub to "push" your local project files to that repository. (If you're not sure how, I can help you with the commands).

### Step B: Connect to Vercel
1. Go to [Vercel.com](https://vercel.com) and sign up with your GitHub account.
2. Click **"Add New"** > **"Project"**.
3. Import your GitHub repository.
4. Keep the default settings and click **"Deploy"**. Your site will be live on a `.vercel.app` link in seconds!

### Step C: Connect Your Domain
1. In your Vercel project, go to **Settings** > **Domains**.
2. Enter your custom domain name.
3. Vercel will give you a few "DNS Records" (Value and Type). 
4. Log in to where you bought your domain (like GoDaddy, Namecheap, etc.) and update your DNS settings with those values.
5. Once saved, it usually takes 15–60 minutes for the domain to point to your new site!

Happy growing! 🚀
