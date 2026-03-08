# Coffee Ordering Application - Blueprint

## Overview
A framework-less web application for ordering coffee, featuring a responsive UI, category-based menu, and Telegram integration for order notifications.

## Features
- **Dynamic Menu:** Category-based menu with Hot/Ice pricing and real photos.
- **Option Selection Modal:** Opens when clicking "+" on a menu card.
  - **Quantity Selection:** Choose how many cups.
  - **Temperature:** HOT or ICED.
  - **Additions (Toggle):** 
    - Size Up (+1,000원)
    - Shot Addition (+500원)
    - Soy Milk (+500원)
    - Decaf (+1,000원)
  - **Strength:** 연하게, 기본.
  - **Dual Action:** 
    - **장바구니 담기 (Add to Cart):** Saves the configuration to the cart.
    - **바로 주문 (Order Now):** Immediately places the order without going through the cart.
- **Interactive Cart:** Slide-up cart sheet where items can be further customized or removed.
- **Orderer Selection:** Mandatory dropdown to select the person ordering.
- **Telegram Notifications:** Sends detailed order breakdowns to a Telegram bot.
- **Modern UI:** Responsive design with smooth animations, glowing effects, and polished aesthetics.

## Design & Style
- **Expressive Typography:** Large, bold headings for clarity.
- **Vibrant Palette:** Energetic colors (Orange for accents, Brown for coffee theme).
- **Interactive Feedback:** Pop animations on buttons, active states for selections.
- **Media Support:** Displays high-quality menu photos with `object-fit: cover`.

## Implementation Details
- **Tech Stack:** HTML5, CSS3 (Modern Baseline), JavaScript (ES Modules).
- **Price Logic:** `getItemPrice` helper calculates base price + selected options.
- **State Management:** Local `cart` array stores objects with unique configurations. Auto-reset modal state after actions.

## Recent Changes (2026-03-08)
- **Direct Order Feature:** Added "바로 주문" button to the option modal for instant ordering.
- **Price Finalization:** Updated labels and logic: Size Up (+1,000원), Decaf (+1,000원).
- **UI Optimization:** Split options into a 2x2 grid for better touch targets.
- **Cleanup:** Removed 'Strong (진하게)' option and 'Decaf Americano' menu card.
- **Stability:** Fully refactored `main.js` to ensure clean state management and robust event handling.
