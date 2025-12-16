import React from "react";
import Home from "./pages/Home";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { BrowserRouter, Routes, Route } from "react-router";
import Layouts from './components/common/Layouts';
import Shop from './pages/Shop';
import {QueryClient,QueryClientProvider,useQuery,} from "@tanstack/react-query";

const App = () => {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route element={<Layouts />}>
             <Route path="/" element={<Home/>}/>
             <Route path="/shop" element={<Shop/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
         <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
      ,
    </>
  );
};

export default App;
