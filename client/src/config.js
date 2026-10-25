export const appConfig = {
  "name": "Inventory Management System",
  "short": "Stockwise",
  "description": "Track products, suppliers, quantities, prices, and low-stock items.",
  "collection": "products",
  "singular": "product",
  "fields": [
    {
      "name": "name",
      "label": "Product name",
      "type": "text",
      "required": true,
      "options": []
    },
    {
      "name": "sku",
      "label": "SKU / code",
      "type": "text",
      "required": true,
      "options": []
    },
    {
      "name": "category",
      "label": "Category",
      "type": "text",
      "required": true,
      "options": []
    },
    {
      "name": "quantity",
      "label": "Quantity in stock",
      "type": "number",
      "required": true,
      "options": []
    },
    {
      "name": "unitPrice",
      "label": "Unit price (INR)",
      "type": "number",
      "required": true,
      "options": []
    },
    {
      "name": "supplier",
      "label": "Supplier",
      "type": "text",
      "required": false,
      "options": []
    }
  ],
  "sample": [
    {
      "name": "Wireless Mouse",
      "sku": "ACC-001",
      "category": "Accessories",
      "quantity": 24,
      "unitPrice": 599,
      "supplier": "Northstar Supplies"
    }
  ]
};
