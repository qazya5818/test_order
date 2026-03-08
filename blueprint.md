# Coffee Ordering Application - Blueprint

## Overview
A framework-less web application for ordering coffee, featuring a responsive UI, category-based menu, and Telegram integration for order notifications.

## Features
- **Dynamic Menu:** Category-based menu with Hot/Ice pricing.
- **Interactive Cart:** Slide-up cart sheet with item options (Temperature, Size Up, Strength).
- **Orderer Selection:** Dropdown to select the person ordering.
- **Telegram Notifications:** Sends order details to a Telegram bot.
- **Modern UI:** Responsive design with smooth animations and polished aesthetics.

## Design & Style
- **expressive Typography:** EXPRESSIVE font sizes for emphasis.
- **Vibrant Palette:** energetic color concentrations.
- **Depth & Texture:** Subtle background noise and multi-layered shadows.
- **Interactive Elements:** Glowing effects on buttons and interactive components.

## Implementation Details
- **Tech Stack:** HTML5, CSS3 (Modern Baseline), JavaScript (ES Modules).
- **Price Logic:** Separate pricing for Hot and Ice options. Default is Ice.
- **Configuration:** `config.js` for Telegram API keys.

## Recent Changes (2026-03-08)
- **Menu Price Update:**
  - 아메리카노: Hot 1,800 / Ice 1,800
  - 카페라떼: Hot 3,000 / Ice 3,200
  - 카페모카: Hot 3,500 / Ice 3,700
  - 바닐라라떼: Hot 3,500 / Ice 3,700
  - 카라멜 마끼야또: Hot 3,500 / Ice 3,700
  - 디카페인 아메리카노: Hot 3,000 / Ice 3,000 (New Item)
  - 카푸치노: Hot 3,000 / Ice 3,200
  - 연유라떼: Hot 3,800 / Ice 4,000
  - 소이라떼: Hot 3,500 / Ice 3,700
  - 밀크티: Hot 3,800 / Ice 4,000
  - 시나몬라떼: Hot 3,800 / Ice 4,000
  - 딸기라떼: Ice 5,500 (시즌메뉴)
  - 고구마라떼: Hot 3,800 / Ice 4,000
  - 오곡라떼: Hot 3,800 / Ice 4,000
  - 초코라떼: Hot 3,800 / Ice 4,000
  - 토피넛라떼: Hot 4,300 / Ice 4,500
  - 미숫가루: Ice 4,800 (시즌메뉴)
- **Logic Update:** Added `getItemPrice` helper to calculate totals based on temperature selection.
- **Spelling Update:** '카라멜마끼아또' changed to '카라멜 마끼야또'.
- **New Item:** Added '디카페인 아메리카노' as a separate menu entry.
