

// import { useState } from "react";
// import { useQuery } from "@tanstack/react-query";
// import { getCharacter } from "./services/character";

// function App() {
//   const [counter, setCounter] = useState(0);
//   const {data, error, isLoading, isError} = useQuery({
//     queryKey: ["character", counter],
//     queryFn: () => getCharacter(counter),
//     staleTime: 60000,
//     enabled: counter > 0,
//   });
//   if (isLoading) {
//    return <p>Loading...</p>
//  }
//   if (isError) {
//     return( <>
//       <h3>OOps! Something went wrong</h3>
//       <p>{ error.message}</p>
//       </>)
//   }
//   return (
//     <>
//       <button onClick={() => setCounter(prevCounter => prevCounter -1)}>-</button>
//       <span>{counter}</span>
//       <button onClick={() => setCounter(prevCounter => prevCounter +1)}>+</button>
//     <pre>{JSON.stringify(data, null, 2)}</pre>
//     </>
//   )
// }
// export default App;

// Пагінація 
// import { useState } from "react";
// import SearchForm from "./components/SearchForm/SeachForm";
// import ArticleList from "./components/ArticleList/ArticleList";
// import { keepPreviousData,  useQuery } from "@tanstack/react-query";
// import { fetchArticles } from "./services/article";
// import ReactPaginate from "react-paginate";
// import css from "./App.module.css";


// function App() {
//   const [search, setSearch] = useState<string | null>(null);
//   const [page, setPage] = useState(0);
//   const { data, error, isLoading, isError, isSuccess } = useQuery({
//     queryKey: ["articles", search, page],
//     queryFn: () => fetchArticles(search as string, page),
//     enabled: search !== null,
//     placeholderData: keepPreviousData,
//   });
//   const handleSearch = (topic: string) => {
//     setSearch(topic);
//     setPage(0);
//   }

//   const handlePageChange = ({selected}: {selected: number}) => {
// setPage(selected);

//   }
//   return (
//     <>
//       <SearchForm onSearch={handleSearch} />
//       {isLoading && <p>Loading...</p>}
//       {isError && (
//         <>
//           <h3>Oops! Something went wrong</h3>
//           <p>{error.message}</p>
//         </>
//       )}
//       {isSuccess && <>
//         <ArticleList items={data.hits} />
//         <ReactPaginate
//           nextLabel=">"
//           previousLabel="<"
//           forcePage={page}
//           pageCount={data.nbPages}
//           containerClassName={css.pagination}
//           activeClassName={css.active}
//           onPageChange={handlePageChange}
//         />
//         </>
//         }

//     </>
//   )
// }

// export default App;

import OrderForm from "./components/OrderForm/OrderForm";

export default function App() {
  return (
    <>
    <OrderForm />
    </>
  )
}