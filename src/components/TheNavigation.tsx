import Image from "next/image"
import Link from "next/link"


const Navigation = () => {

    return(
        <>
            <nav className="sm:w-full sm:h-[13vw] sm:flex sm:justify-center sm:items-center sm:absolute sm:top-0 sm:left-0">
                <div className="sm:golden13Container sm:flex sm:items-center sm:justify-between">
                    <Link href="#" className="sm:text-white sm:font-bold sm:leading-normal sm:text-[0.9vw]">Home Page</Link>
                    <Link href="#" className="sm:text-white sm:font-bold sm:leading-normal sm:text-[0.9vw]">Products</Link>
                    <Link href="#" className="sm:text-white sm:font-bold sm:leading-normal sm:text-[0.9vw]">Gallery</Link>
                    <Link href="#" className="sm:text-white sm:font-bold sm:leading-normal sm:text-[0.9vw]">Jobs</Link>
                    <Link href="/">
                        <Image className="sm:w-[9.5vw] h-auto" src="/img/icons/Logo.png" alt="logo" width={180} height={128}/>
                    </Link>
                    <Link href="#" className="sm:text-white sm:font-bold sm:leading-normal sm:text-[0.9vw]">News</Link>
                    <Link href="#" className="sm:text-white sm:font-bold sm:leading-normal sm:text-[0.9vw]">FAQ</Link>
                    <Link href="#" className="sm:text-white sm:font-bold sm:leading-normal sm:text-[0.9vw]">About Us</Link>
                    <Link href="#" className="sm:text-white sm:font-bold sm:leading-normal sm:text-[0.9vw]">Contact Us</Link>
                </div>
            </nav>
        </>
    )
}



export default Navigation