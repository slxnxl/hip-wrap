import Navbar from './navbar'
import Footer from './footer'
import Header from './header'
import ContactUSBtn from './contactUsBtn'
 
export default function Layout({ children }) {
  return (
    <div className='container'>
      <Header/>
      <main>{children}</main>
      <ContactUSBtn></ContactUSBtn>
      <Footer adress={123}/>
    </div>
  )
}