# Inventory Management System — Design Notes

- **Color palette:** graphite grey, cool light grey, white, and coral accent.
- **Navigation:** responsive horizontal top bar; the left sidebar has been removed.
- **Dashboard:** dark graphite hero banner, three inventory summary cards, searchable product table, and coral primary action buttons.
- **Responsive behavior:** top navigation wraps on smaller screens; forms collapse to one column on mobile; wide tables can scroll horizontally.
- **Existing functionality retained:** product listing, search, add product, delete confirmation, API loading/error/success feedback, and MongoDB persistence.
- **Security reminder:** keep actual credentials in local `.env` files only; never include real secrets in the ZIP or commit them to Git.
