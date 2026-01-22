import React from 'react'

const Home = ({onLogout}) => {
    return (
        <div>
            <h1>home page</h1>
            <button 
                onClick={onLogout}
                className='bg-red-500 px-5 py-2 rounded-xl cursor-pointer'
                    >Logout
            </button>
        </div>
    )
}

export default Home
