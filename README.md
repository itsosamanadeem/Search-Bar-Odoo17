# Odoo 17 Custom Search Bar on Price List

## Overview
This Odoo 17 module adds a custom search bar to the **Product Pricelist** form view, allowing users to search for products dynamically. When a user selects a product from the dropdown, the system automatically scrolls to the corresponding **Pricelist Item** and highlights it.

## Features
- **Live Product Search**: Filters products based on user input.
- **Dropdown Selection**: Displays matching products with their prices.
- **Automatic Scrolling**: Scrolls to the selected product in the pricelist items.
- **Highlighted Selection**: Changes the background color of the selected item.

## Installation
1. Copy the module folder to your Odoo 17 addons directory.
2. Restart the Odoo server:
   ```bash
   sudo systemctl restart odoo17
   ```
3. Activate developer mode in Odoo.
4. Go to **Apps** and click **Update Apps List**.
5. Search for `custom_search_bar_on_pricelist` and install the module.

## Usage
1. Navigate to **Sales** > **Product Pricelists**.
2. In the **Search Product** field, type at least 3 characters to see suggestions.
3. Click on a product from the dropdown list.
4. The screen will automatically scroll to the corresponding pricelist item and highlight it.

## Technical Details
- Uses **Owl Framework** for dynamic UI updates.
- Fetches data via **ORM call** (`search_product_items` method in `product.pricelist`).
- Utilizes **event bus** to trigger scrolling to the selected product.

## Contributing
Feel free to create a pull request or report issues in the repository.

## License
This module is licensed under the **MIT License**.

## Author
Developed by **Osama Nadeem** 🚀

