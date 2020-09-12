import React from 'react'
import './SearchPage.css'
import { Button } from '@material-ui/core';
import SearchResult from './SearchResult';

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__info">
                <p>62 stays . 26 august to 30 august .2 guest</p>
                <h1>Stays nearby</h1>
                <Button
                    variant="outlined"
                >Cancellation Flexibility
                </Button>
                <Button
                    variant="outlined"
                >Type of place
                </Button>
                <Button
                    variant="outlined"
                >Price
                </Button>
                <Button
                    variant="outlined"
                >Rooms and beds
                </Button>
                <Button
                    variant="outlined"
                >More filters
                </Button>
            </div>
            <SearchResult
                img="https://exotichomeliving.com/wp-content/uploads/2020/03/CAM_2_OPTION_1.jpg"
                location="Mountain View"
                title="Emmanuel's house"
                description="2 guests . 1 bedroom . 1 bed . 1.5 . Washing Machine"
                star={4.73}
                price="£30 / night"
                total="£117 total"
            />

            <SearchResult
                img="https://i.pinimg.com/originals/ec/72/bf/ec72bf9a6e0607af39fcb0edd8266f3d.jpg"
                location="Mountain View"
                title="Emmanuel's house"
                description="2 guests . 1 bedroom . 1 bed . 1.5 . Washing Machine"
                star={4.73}
                price="£30 / night"
                total="£117 total"
            />
        </div>
    )
}

export default SearchPage
