# User Interaction Recorder
This extension is built on top of the [chrome extension typescript starter](https://github.com/chibat/chrome-extension-typescript-starter).

## Introduction
The User Interaction Recorder is a Chrome extension that records user interactions on amazon web pages

## Key Features
- Interaction Recording: Captures user actions such as clicks, text inputs, scrolling events, and page navigations.
- Semantic Click Data: For click actions, the extension preloads recipes on the web page. If a clicked element has been processed by the recipe logic, it records a data-clickable-id, serving as semantic information about the user's action.
- Data Export: After performing a set of actions, you can click the extension icon to download the recorded data. Note: Please limit the number of actions before downloading to prevent Chrome from freezing due to large amounts of data (each action may record an HTML snapshot and a screenshot).The data will be saved in a folder named DATA/SESSION_<timestamp> with the following contents:
interactions.json: A JSON file containing recorded interactions and HTML snapshots.
session_info.txt: A text file with session information.
Screenshots.
- User ID: The extension allows you to set a user ID, which will be recorded in the session info.

## Installation

1. Enable Developer Mode in Chrome Extensions:
Open Chrome and navigate to chrome://extensions/.
Enable Developer mode by toggling the switch in the upper right corner.
2. Load the Unpacked Extension:
Click on Load unpacked.
Select the `dist`folder containing the extension's files.
3. Configure Download Settings:Go to Chrome settings and disable Ask where to save each file before downloading to allow the extension to save data files automatically.

## Known Issues
- Tab Switching Actions:

Issue: When switching between already opened tabs, it's unclear whether this should be counted as an action and whether screenshots should be taken. (And I met some bugs when testing)

- Asynchronous Recording Issues:

Issue: There may be asynchronous issues causing some actions not to be recorded.

- Incomplete Click Data Recording:

Issue: While some data-clickable-id data processed by recipes is successfully recorded, the logic requires adjustments. Some clicks are not being recorded correctly.

- Scroll Event Details:

Issue: The pixel count for scroll events is not currently recorded. Plan to add.
- Interaction IDs:

Issue: Interactions currently lack unique identifiers. Plan to add.
- Purchase Actions and Product Information Recording:

Issue: The code for recording purchase actions and product information has bugs. Previously, only the product name and price were recorded.
Planned Improvement: Following Yuxuan's code, update the code to include additional details such as ASIN.


## For Developers

### Prerequisites

* [node + npm](https://nodejs.org/) (Current Version)

### Project Structure

* src/typescript: TypeScript source files
* src/assets: static files
* dist: Chrome Extension directory
* dist/js: Generated JavaScript files

### Setup & Build

```
npm install
npm run build
```
