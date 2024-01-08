import React from 'react'
import Navbar from '../../Components/Navbar'
import Container from '../../Components/Container'
import Grils from '../../Components/Map'
import Footer from '../../Components/Footer'
import FooterFo from '../../Components/FooterFo'
function Home() {
    return (
        <div>
            <div className='App1 grid justify-items-center '>
                <div className='App2 w-[1100px] h-[1000px] -mb-10 grid justify-center '>
                    <Navbar />
                    <Container />
                    <Grils />
                </div><br />
                <div className='sm:w-full sm:h-[50vh] '>
                    <Footer />
                    <FooterFo />
                </div>

            </div>
        </div>
    )
}

export default Home