# Coffee Ordering Application - Blueprint

## Overview
A framework-less web application for ordering coffee, featuring a responsive UI, category-based menu, and Telegram integration for order notifications.

## Features
- **Dynamic Menu:** Category-based menu with Hot/Ice pricing.
- **Option Selection Modal:** Opens when clicking "+" on a menu card.
  - **Quantity Selection:** Choose how many cups.
  - **Temperature:** HOT or ICED.
  - **Additions:** Size Up (+1,000), Shot Addition (+500), Soy Milk (+500), Decaf (+500).
  - **Strength:** 연하게, 기본, 진하게.
- **Interactive Cart:** Slide-up cart sheet where items can be further customized or removed.
- **Orderer Selection:** Dropdown to select the person ordering.
- **Telegram Notifications:** Sends detailed order breakdowns to a Telegram bot.
- **Modern UI:** Responsive design with smooth animations, glowing effects, and polished aesthetics.

## Design & Style
- **Expressive Typography:** Large, bold headings for clarity.
- **Vibrant Palette:** Energetic colors (Orange for accents, Brown for coffee theme).
- **Interactive Feedback:** Pop animations on buttons, active states for selections.

## Implementation Details
- **Tech Stack:** HTML5, CSS3 (Modern Baseline), JavaScript (ES Modules).
- **Price Logic:** `getItemPrice` helper calculates base price + selected options.
- **State Management:** Local `cart` array stores objects with unique configurations.

## Recent Changes (2026-03-08)
- **structural Change:** Clicking "+" now opens an **Option Selection Modal** instead of adding directly to the cart.
- **New Options:** Added Shot addition, Soy milk, and Decaf options with individual costs.
- **Price Updates:** Finalized all menu prices and added-option costs.
- **Code Refactoring:** Cleaned up `main.js` to handle item indices correctly in the cart, allowing multiple entries of the same drink with different options.
