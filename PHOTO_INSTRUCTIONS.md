# Adding Your Photo

## How to Replace the Placeholder Photo

1. **Add your photo file** to the `src/assets/` folder
   - Recommended formats: JPG, PNG, or WebP
   - Recommended size: At least 256x256 pixels (square aspect ratio)
   - File name: You can name it anything (e.g., `my-photo.jpg`)

2. **Update the HeroSection component** in `src/components/HeroSection.jsx`:
   - Replace the import: `import photoPlaceholder from "../assets/photo-placeholder.svg";`
   - With your photo: `import myPhoto from "../assets/my-photo.jpg";` (adjust filename as needed)
   - Update the img src: `src={myPhoto}`

3. **Example update**:
   ```jsx
   // Before
   import photoPlaceholder from "../assets/photo-placeholder.svg";
   // ... in the img tag
   src={photoPlaceholder}
   
   // After
   import myPhoto from "../assets/my-photo.jpg";
   // ... in the img tag
   src={myPhoto}
   ```

## Photo Styling

The photo is automatically styled with:
- Circular shape
- Responsive sizing (24x24 on mobile, 32x32 on desktop)
- Border with primary color
- Hover effects with scale and glow
- Smooth animations

## Current Placeholder

The current placeholder is a custom SVG with a gradient background and camera icon. It will be replaced when you add your actual photo. 