import { Route, Routes } from 'react-router-dom'
import AdminDashboard from './components/AdminDashboard/AdminDashboard'
import AdminPage from './components/AdminPage/AdminPage'
import AdminAddProduct from './components/AdminAddProduct/AdminAddProduct'
import HomePage from './components/HomePage/HomePage'
import ProductCardList from './components/ProductCardList/ProductCardList'
import WebShopProvider from './context/WebShopProvider'
import SearchResultPage from './components/SearchResultPage/SearchResultPage'
import AdminProducts from './components/AdminProducts/AdminProducts'
import DetailView from './components/DetailView/DetailView'
import ProductHero from './components/ProductHero/ProductHero'
import ProductSpots from './components/ProductSpots/ProductSpots'




function App() {
 
  return(
    <>
      <WebShopProvider>  
          <Routes>
            <Route exact path='/' element={<HomePage/>}/>
            <Route path="/search" element={<SearchResultPage/>}/>
            <Route path="/product/:slug" element={<DetailView/>}/>
            <Route path="/admin/dashboard" element={<AdminPage><AdminDashboard/></AdminPage>}/>
            <Route path="/admin/products" element={<AdminPage><AdminProducts/></AdminPage>}/>
            <Route path="/admin/add-product" element={<AdminPage><AdminAddProduct/></AdminPage>}/>
          </Routes>  
      </WebShopProvider>

    </>
  )
}

export default App
