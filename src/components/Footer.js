import React from 'react'

const Footer = () => {
    return (
        <div className="mx-auto bg-slate-700 flex w-screen h-32 shadow-lg">
            <h1 className="text-3xl flex mx-auto font-bold underline text-white text-center">
                This website uses TMDB and the TMDB APIs but is not endorsed, certified, or otherwise approved by TMDB.
            </h1>
        </div>
    )
}

export default Footer;