# Zekr ذكر

# Quran Ayah Display Chrome Extension

This Chrome extension fetches and displays Quranic verses at regular intervals. It uses a JSON file (`quraan.json`) containing Quranic verses and displays them in a non-intrusive manner.

## How to Use

1. Clone or download the project to your local machine.

2. Load the extension in Chrome:
   - Open Chrome and go to `chrome://extensions/`.
   - Enable "Developer mode" in the top-right corner.
   - Click on "Load unpacked" and select the folder containing the extension files.

3. The extension will fetch and display a new Quranic verse every 5 minutes.

## Files

- `manifest.json`: Provides metadata about the extension, including permissions and the location of content scripts.

- `index.html`: HTML file for the popup, containing the structure of the extension.

- `style.css`: CSS file for styling the popup.

- `script.js`: JavaScript file responsible for fetching and displaying Quranic verses.

- `quraan.json`: JSON file containing Quranic verses. Make sure to update this file with your own data.

## Customization

- You can customize the appearance and behavior of the extension by modifying the CSS and JavaScript files.

- Replace the Arabic font link in `index.html` with your preferred Arabic font.

- Add your own extension logo (`extension_logo.png`) for a personalized touch.

## Notes

- The use of `alert` to display verses might be disruptive. Consider alternative methods for a more user-friendly experience.

- Make sure to update `quraan.json` with the actual Quranic verses you want to display.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

![Zekr Logo](extension_logo.png)
