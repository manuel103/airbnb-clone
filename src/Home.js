import React from 'react'
import Banner from './Banner'
import './Home.css'
import Card from './Card';


function Home() {
    return (
        <div className='home'>
            <Banner />

            <div className="home__section">
                <Card
                    src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/edyta-and-co-layout-1549663065.jpg"
                    title="Entire homes"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                />
                <Card
                    src="https://cdn.home-designing.com/wp-content/uploads/2019/04/living-room-pendant-light.jpg"
                    title="Entire homes"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                />
                <Card
                    src="https://homeandfarmsense.com/wp-content/uploads/2018/10/Home-Interior-Design01.jpg"
                    title="Entire homes"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                />
            </div>
            <div className="home__section">
                <Card
                    src="https://www.thewowstyle.com/wp-content/uploads/2015/06/best-home-interior-designer-01.jpg"
                    title="Entire homes"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    price="£130/night"
                />

                <Card
                    src="https://i.pinimg.com/originals/ec/72/bf/ec72bf9a6e0607af39fcb0edd8266f3d.jpg"
                    title="Entire homes"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    price="£70/night"
                />

                <Card
                    src="https://freshome.com/wp-content/uploads/2014/07/GettyImages-523468730.jpg"
                    title="Entire homes"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    price="£350/night"
                />
            </div>
        </div>
    )
}

export default Home
