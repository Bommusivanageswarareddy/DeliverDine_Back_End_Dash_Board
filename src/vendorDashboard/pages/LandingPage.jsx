import React, { useState, useEffect } from 'react'

import SideBar from '../components/SideBar'
import VendorLogin from '../components/forms/VendorLogin'
import VendorRegister from '../components/forms/VendorRegister'
import AddFirm from '../components/forms/AddFirm'
import AddProduct from '../components/forms/AddProduct'
import Welcome from '../components/Welcome'
import AllProducts from '../components/AllProducts'
import NavBar from '../components/NavBar'

const LandingPage = () => {

    const [showLogin, setshowLogin] = useState(false)
    const [showRegister, setshowRegister] = useState(false)
    const [showFirm, setshowFirm] = useState(false)
    const [showProduct, setshowProduct] = useState(false)
    const [showWelcome, setshowWelcome] = useState(false)
    const [showAllProducts, setShowAllProducts] = useState(false)
    const [showLogOut, setShowLogOut] = useState(false)
    const [showFirmTitle, setShowFirmTitle] = useState(true)

    useEffect(() => {
        const loginToken = localStorage.getItem('loginToken');
        if (loginToken) {
            setShowLogOut(true)
        }
    }, [])

    useEffect(() => {
        const firmName = localStorage.getItem('firmName');
        if (firmName) {
            setShowFirmTitle(false)
        }
    })

    const logOutHandler = () => {
        confirm("Are you sure to logout?")
        localStorage.removeItem("loginToken");
        localStorage.removeItem("firmId");
        localStorage.removeItem("firmName")
        setShowLogOut(false)
        setShowFirmTitle(true)
    }

    const showLoginHandler = () => {
        setshowLogin(true)
        setshowRegister(false)
        setshowFirm(false)
        setshowProduct(false)
        setshowWelcome(false)
        setShowAllProducts(false)

    }


    const showRegisterHandler = () => {
        setshowRegister(true)
        setshowLogin(false)
        setshowFirm(false)
        setshowProduct(false)
        setshowWelcome(false)
        setShowAllProducts(false)
    }

    const showFirmHandler = () => {
        if (showLogOut) {
            setshowLogin(false)
            setshowRegister(false)
            setshowFirm(true)
            setshowProduct(false)
            setshowWelcome(false)
            setShowAllProducts(false)
        } else {
            alert("Please Login / Register");
            setshowLogin(true)
        }

    }

    const showProductHandler = () => {
        if (showLogOut) {
            setshowLogin(false)
            setshowRegister(false)
            setshowFirm(false)
            setshowProduct(true)
            setshowWelcome(false)
            setShowAllProducts(false)
        } else {
            alert("Please Login / Register");
            setshowLogin(true)
        }
    }
    const showWelcomeHandler = () => {
        setshowLogin(false)
        setshowRegister(false)
        setshowFirm(false)
        setshowProduct(false)
        setShowAllProducts(false)
        setshowWelcome(true)
    }

    const showAllProductsHandler = () => {
        if (showLogOut) {
            setshowLogin(false)
            setshowRegister(false)
            setshowFirm(false)
            setshowProduct(false)
            setshowWelcome(false)
            setShowAllProducts(true)

        } else {
            alert("Please Login / Register");
            setshowLogin(true)
        }
    }

    return (
        <>
            <div className='landingSection'>
                <NavBar showLoginHandler={showLoginHandler} showRegisterHandler={showRegisterHandler} showLogOut={showLogOut} logOutHandler={logOutHandler} />
                <div className="collectionSection">
                    <SideBar showFirmHandler={showFirmHandler} showProductHandler={showProductHandler} showAllProductsHandler={showAllProductsHandler} showFirmTitle={showFirmTitle} />
                    {showLogin && <VendorLogin showWelcomeHandler={showWelcomeHandler} />}
                    {showRegister && <VendorRegister showLoginHandler={showLoginHandler} />}
                    {showFirm && showLogOut && <AddFirm />}
                    {showProduct && showLogOut && <AddProduct />}
                    {showWelcome && <Welcome />}
                    {showAllProducts && showLogOut && <AllProducts />}

                </div>

            </div>
        </>
    )
}

export default LandingPage