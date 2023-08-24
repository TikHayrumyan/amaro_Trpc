import { type NextPage } from "next";
import Navigation from "~/components/TheNavigation";
import Link from "next/link";
import Image from "next/image";
import RootLayout from "~/components/layout";
import { RouterOutputs,api } from "~/utils/api";
import { useState } from "react";
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'

type Home = RouterOutputs["home"]["getTitle"];
    
// export async function getServerSideProps() {
//   const result = await api.home.getTitle.useQuery()

//   // console.log(result,"asas");
  

//   return {
//     props: {
//       data: result
//     },
//   };
// }
export default function Home () {
  
  const {data} = api.home.getTitle.useQuery();
  
  
  const [HomeData,setHomeData] = useState<Home | null>(null)


 

  

  return (
    <>
    <RootLayout title="| Home Page">
      <main>
         {/* first Section */}
         <div className="sm:flex sm:relative sm:w-full sm:h-[95vh] sm:items-center sm:justify-center sm:bg-[url(/img/HomePage/firstSlide.jpg)] sm:bg-no-repeat sm:bg-[length:100%_100%]">
            <Navigation/>
            <div className="sm:golden13Container sm:flex sm:items-center sm:justify-center">
                <h1 className="sm:text-white sm:text-7xl sm:font-light sm:leading-normal">{data?.title}</h1>
            </div>
        </div>
        {/* Second Section (What are you interested in) */}
        <div className="sm:flex sm:flex-col sm:golden13Container sm:mb-[3vw]">
            <h2 className="sm:mt-[2.5vw] sm:mb-[1.25vw] sm:text-[1.5vw] sm:text-neutral-700 sm:font-semibold sm:leading-normal">WHAT ARE YOU INTERESTED IN</h2>
            {/* img Collapse */}
            <div className="sm:w-full sm:h-[35vw] sm:flex sm:justify-between">
              {/* left */}
                <div className="sm:flex sm:flex-col sm:w-[49.5%] sm:justify-between">

                    <div className="sm:w-full sm:h-[50%] sm:flex sm:items-end sm:bg-[length:100%_100%] sm:bg-[url(/img/HomePage/greenBottle.jpg)] ">
                        <Link href="#" className="sm:flex sm:w-[8vw] sm:h-[2.5vw] sm:justify-center sm:items-center sm:bg-opacity-70 sm:bg-white sm:cursor-pointer ">
                            <span className="sm:text-[0.9vw] sm:font-semibold sm:leading-normal">ABOUT US</span>
                        </Link>
                    </div>

                    <div className="sm:flex sm:w-full sm:h-[50%] sm:justify-between sm:mt-[2%]">
                      <div className="sm:w-[49%] sm:h-auto sm:flex sm:items-end sm:bg-[length:100%_100%] sm:bg-[url(/img/HomePage/leftBottle.jpg)] ">
                        <Link href="#" className="sm:flex sm:w-[12vw] sm:h-[2.5vw] sm:justify-center sm:items-center sm:bg-opacity-70 sm:bg-white sm:cursor-pointer">
                              <span className="sm:text-[0.9vw] sm:font-semibold sm:leading-normal">JOB OPPORTUNITIES</span>
                        </Link>
                      </div>
                      <div className="sm:w-[49%] sm:h-auto sm:flex sm:items-end sm:bg-[length:100%_100%] sm:bg-[url(/img/HomePage/rightBottle.jpg)]">
                          <Link href="#" className="sm:flex sm:w-[6vw] sm:h-[2.5vw] sm:justify-center sm:items-center sm:bg-opacity-70 sm:bg-white sm:cursor-pointer">
                              <span className="sm:text-[0.9vw] sm:font-semibold sm:leading-normal">NEWS</span>
                          </Link>
                      </div>
                    </div>
                </div>
                {/* right */}
                <div className="sm:w-[49.5%]">
                    <div className="sm:w-full sm:h-full sm:flex sm:items-end sm:bg-[length:100%_100%] sm:bg-[url(/img/HomePage/rightBigBottle.jpg)] ">
                          <Link href="#" className="sm:flex sm:w-[10vw] sm:h-[2.5vw] sm:justify-center sm:items-center sm:bg-opacity-70 sm:bg-white sm:cursor-pointer">
                              <span className="sm:text-[0.9vw] sm:font-semibold sm:leading-normal">OUR PRODUCTS</span>
                          </Link>
                    </div>
                </div>

            </div>
            
            <p className="sm:w-full sm:h-auto sm:mt-[2vw] sm:text-black sm:text-[1.4vw] sm:font-normal">Lorem ipsum a nunc at diam dignissim ultricies ut vitae purus. Sed purus urna, luctus mollis ligula quis, fringilla dignissim purus. Praesent ac faucibus nunc, et accumsan orci. Duis et elementum dolor, semper rhoncus elit. Nulla facilisi. Nulla interdum ligula at tellus rhoncus rutrum.</p>
            <Image src="/img/HomePage/appleDrink.jpg" alt="Drink" width={500} height={500} className="sm:w-full sm:h-auto sm:mt-[2vw]"/>
        </div>
        {/* Third Section (BEST SELLERS) */}
        <div className="sm:flex sm:flex-col sm:golden13Container sm:mb-[2vw]">
            <h2 className="sm:mt-[2.5vw] sm:mb-[1.25vw] sm:text-[1.5vw] sm:text-neutral-700 sm:font-semibold sm:leading-normal">BEST SELLERS</h2>
            <div className="sm:w-full sm:h-auto sm:mt-[1vw] ">
                asdsad
            </div>
        </div>
      </main>
      </RootLayout>
    </>
  );
}




