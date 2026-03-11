// import OrderForm from "./OrderForm/OrderForm";
import { useState } from "react";


import axios from "axios";

import SearchForm from "./SearchForm/SearchForm";
import ArticleList from "./ArticleList/ArticleList";

import type { Article } from "./types/article";
import Sidebar from "./Sidebar/Sidebar";

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [articles, setArticles] = useState<Article[]>([]);
  const handleSearch = async (topic: string) => {
    try {
      setIsLoading(true);
      setIsError(false);
      setArticles([]);
      const { data } = await axios.get<{ hits: Article[] }>("https://hn.algolia.com/api/v1/search", {
        params: {
          query: topic,
        }
      });
    
      setArticles(data.hits);
    } catch (error) {
      console.error(error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false)
  return (
    <>
      <h1>Form</h1>
      <SearchForm onSearch={handleSearch} />
      {isLoading && <p>Loading articles...</p>}
      {isError && <p>Oops! Something went wrong</p>}
      {/* <OrderForm />
      <OrderForm /> */}
      {articles.length > 0 && <ArticleList articles={articles} />}

      <button onClick={() => setIsSidebarOpen(true)}>Open</button>
{isSidebarOpen && <Sidebar onClose={() => setIsSidebarOpen(false)}/>}
    </>
  )
}

export default App
