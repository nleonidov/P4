import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Layout(props) {
    return (
        <>
            <div className='App'>
                <Header />
                    {props.children}
            </div>
        
            <div className='App-Footer'>
                <Footer />
            </div>
        </>
    )
}