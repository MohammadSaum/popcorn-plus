import logo from './assets/images/logo.png';
import landing from './assets/images/landing page image.png';
import tv from './assets/images/smart-tv.png';
import computer from'./assets/images/laptop.png';
import phone from './assets/images/mobile.png';
import console from './assets/images/console.png';

const App = () => {
    return (
        <div>

            {/* landing page 1 */}

            <div className='min-h-screen flex flex-col w-full p-5'>
                <div className='w-full flex justify-end px-4'>
                    <div className='flex border-[1.5px] rounded-md p-2 cursor-pointer hover:border-[#FFFFFF99] hover:text-[#FFFFFF99] transition duration-150'>LOG IN</div>
                </div>
                
                <div className='h-150 w-190 flex flex-col grow justify-center gap-5 p-2'>
                    <img className='h-30 w-50' src={logo} alt='Disney-Plus-Logo'></img>
                    <span className='text-5xl font-bold w-130'>Stories you'd expect + Stories you wouldn't</span>

                    <div className='flex gap-5 w-full'>
                        <div className='flex flex-col h-40 w-90 gap-2 p-2'>
                        <h2 className='text-4xl flex items-baseline gap-1'>$3.99 
                            <span className='text-lg flex items-center justify-center text-[#FFFFFF99] h-5 border-l-2 pl-1'> Month</span>
                        </h2>
                        <span className='text-[#FFFFFF99] text-lg'>Subscription required.</span>
                        <button className='bg-[#1A86FF] flex p-2 rounded-md justify-center items-center cursor-pointer hover:bg-[#0072C6] active:scale-98 transition duration-150'>SIGN UP NOW</button>
                        </div>

                        <div className='flex flex-col h-40 w-90 gap-2 p-2'>
                        <h2 className='text-4xl flex items-baseline gap-1'>$39.99 
                            <span className='text-lg flex items-center justify-center text-[#FFFFFF99] h-5 border-l-2 pl-1'>Year</span>
                        </h2>
                        <span className='text-[#FFFFFF99] text-lg'>Save over 15%.* Subscription required.</span>
                        <button className='bg-[#1A86FF] flex p-2 rounded-md justify-center items-center cursor-pointer hover:bg-[#0072C6] active:scale-98 transition duration-150'>SAVE ON 12 MONTHS</button>
                        </div>
                    </div>
                    <span className='text-[#FFFFFF99] text-xs p-2 -mt-9'>*Saving compared to 12 months of the mostly subscription price.</span>

                    
                </div>
            </div>

            {/* landing page 2 */}

            <div className='min-h-screen p-15'>
                <div className='flex gap-10'>
                    <div className='h-140 w-160'>
                    <img src={landing} alt='Screen Images'></img>
                    </div>

                    <div className='pt-13'>
                        <h2 className='text-5xl font-semibold mb-2'>Watch the way you want</h2>
                        <div className='px-5 py-4  text-[#FFFFFF99] gap-2 flex flex-col w-130 text-lg'>
                        <li>
                            Host virutal movie nights with GroupWatch. Pause, rewind and react with up to six personal friends. To invite or be invited to join GroupWatch, supscription is required
                        </li>
                        <li>
                            Download any movie or series and watch on-the-go
                        </li>
                        <li>
                            Keep your family safe with easy parental controls
                        </li>
                        <li>
                            An ever-growing range of titles in stunning 4K UHD and Dolby Atmos sound on conpatible devices
                        </li>
                        <li>
                            Stream on up to four devices at the same time
                        </li>
                        </div>
                        
                    </div>
                </div>
            
                <div className='w-full mt-3 flex items-center justify-center'>
                    <button className='bg-[#1A86FF] w-90 flex p-2 rounded-md justify-center items-center cursor-pointer hover:bg-[#0072C6] active:scale-98 transition duration-150'>SIGN UP NOW</button>
                </div>
            </div>

            {/* landing page 3 */}

            <div className='min-h-screen p-13 flex flex-col'>
                <div className=' flex w-full justify-around text-5xl font-semibold'>Available on your favourite devices</div>

                <div className='flex grow pt-20 px-25 justify-between'>
                    <div className='flex flex-col gap-3 w-70 items-center'>
                        <img className='w-45 h-45' src={tv} alt='tv image'></img>
                        <h2 className='text-2xl font-semibold mb-3'>TV</h2>
                        <div className='flex flex-col items-center text-md text-[#FFFFFF99]'>
                            <ul>Amazon Fire TV</ul>
                            <ul>Android TV Devices</ul>
                            <ul>Apple TV</ul>
                            <ul>Chromecast</ul>
                            <ul>LG TVs</ul>
                            <ul>Roku</ul>
                            <ul>Samsung</ul>
                            <ul>Sky Q</ul>
                        </div>
                    </div>

                    <div className='flex flex-col gap-5 w-70 items-center'>
                        <img className='w-32 h-32 mt-6' src={computer}></img>
                        <h2 className='text-2xl font-semibold pt-5'>Computer</h2>
                        <div className='flex flex-col items-center text-[#FFFFFF99]'>
                            <ul>Chrome OS</ul>
                            <ul>MacOS</ul>
                            <ul>Window PC</ul>

                        </div>
                    </div>

                    <div className='flex flex-col bg-amber-600 gap-3 w-70 items-center'>
                        <img className='w-30 h-30 mt-6' src={phone}></img>
                        <h2>Mobile & Tablet</h2>
                    </div>

                    <div className='flex flex-col bg-amber-600 gap-3 w-70 items-center'>
                        <img className='w-25 h-25 mt-9' src={console}></img>
                        <h2>Game Consoles</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
