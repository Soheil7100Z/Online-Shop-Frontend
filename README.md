# Online Shop Frontend

It presents the products of different categories. Customers are able to filter the products based on the category (checkbox), check every product on its own page, and then add it to the cart. On the cart page, the items can be checked or deleted by the customer.

## 🌐 Live URL

- [Online Shop on Vercel](https://online-shop-frontend-omega.vercel.app)

## 🔍 Features

- **Pages**: Home (Products), Item, Cart
- **Cart Page**: Add and delete items to and from the cart (communicates with backend API)
- **Error Page**: Handles unexpected application errors gracefully by displaying a user-friendly error message.
- **Error and NotFound Page**: Shown when a user navigates to a route that doesn't exist.
- **UX Enhancements**:
  - Sticky header
  - Custom loading spinner (`ClipLoader`)
  - Clean layout with footer

## 🛠️ Technologies Used

- **React** (bootstrapped with Vite)
- **Custom Utility CSS** (handwritten by myself)
- **React Router DOM** – page navigation
- **React Icons** – icons
- **React Spinners** – loading indicators
- **react-query** - Laoding data in components

## 🔌 API Integration

- Connected to backend hosted on Render
- Uses `fetch()` with `GET` , `POST` and `DELETE` requests to work with products data on the backend

## 📦 Key React Tools

- `useState`, `useEffect`, `useLoaderData`, `useNavigate` , `useQuery` , `useQueryClient`  
- Component-based layout for scalability

## 🚀 Run Locally

```bash
git clone https://github.com/Soheil7100Z/Online-Shop-Frontend.git
cd Online-Shop-Frontend
npm install
npm run dev
