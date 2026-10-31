import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import CategoryNav from "./components/CategoryNav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Category from "./pages/Category";
import Favorites from "./pages/Favorites";
import ArticleDetails from "./pages/ArticleDetails";
import NotFound from "./pages/NotFound";

function App() {
  const { pathname } = useLocation();
  const showCategoryNav = pathname !== "/search" && pathname !== "/favorites";

  return (
    <div className="app">
      <Header />
      <Navbar />
      {showCategoryNav && (
        <div className="toolbar">
          <CategoryNav />
        </div>
      )}
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/category/:category" element={<Category />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/article/:id" element={<ArticleDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
