'use client'
import { useEffect, useState } from "react";
import { motion } from "framer-motion"  
import { useRouter } from "next/navigation";
import Side from "@/components/Side"
import Link from "next/link";
import Footer from "@/components/footer"

export default function Home() { 
  const router = useRouter()

  const [search, setSearch] = useState()

  const [alldata, setAllData] = useState()
  const [loading, setLoading] = useState(false)

  async function get_search_data(value) {
    try {
      // Clear search results while new search is being processed
      setSearch(null);

      // Only make a request if the query length is 3 or more characters
      if (value.length > 3) {
        const response = await fetch('/api/search', {
          method: "POST",
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ query: value }),
        });

        // Check if the response is OK before processing
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        setSearch(data);
      } else {
        // Reset or clear search if input is less than 3 characters
        setSearch(null);
      }
    } catch (error) {
      console.error('Error fetching search data:', error);
      setSearch([]); // Optionally set an empty array on error
    }
  }


  const get_all_data = async () => {
    setAllData();
    setLoading(true)
    const response = await fetch('/api/home');
    const data = await response.json();
    setLoading(false)
    setAllData(data);
  }

  useEffect(() => {
    get_all_data();
  }, [])

  return (
    <>
      <div className="w-full h-full">

        <div className="h-[70px] flex flex-row items-center md:px-[5rem] py-4">

          <div className="hidden cursor-pointer md:block">
            <Link href="/">
              <img className="w-[170px]" src="https://demo.ramsthemes.online/animace/wp-content/uploads/2021/11/a-logo-red.svg" alt="" />
            </Link>
          </div>

          <div className="mx-auto h-full rounded-[8px] ">
            <div className="border border-[#EFEEEF] h-full w-[275px] md:w-[749px] rounded-[8px] flex flex-row">

              <input
                type="text"
                onChange={(e) => get_search_data(e.target.value)}
                className="text-[12px] text-[#1d1d1d] outline-none w-full h-full px-6 rounded-[8px]" placeholder="Search here..." />

              <span className="h-full flex justify-center items-center px-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 512 512"><path d="M460.355 421.59l-106.51-106.512c20.04-27.553 31.884-61.437 31.884-98.037C385.73 124.935 310.792 50 218.685 50c-92.106 0-167.04 74.934-167.04 167.04 0 92.107 74.935 167.042 167.04 167.042 34.912 0 67.352-10.773 94.184-29.158L419.945 462l40.41-40.41zM100.63 217.04c0-65.095 52.96-118.055 118.056-118.055 65.098 0 118.057 52.96 118.057 118.056 0 65.097-52.96 118.057-118.057 118.057-65.096 0-118.055-52.96-118.055-118.056z"></path></svg>
              </span>

            </div>
          </div>

          <Side />
        </div>
        <div className="line"></div>

        <div className="flex flex-row w-full h-full overflow-hidden">

          <div className="hidden md:flex md:min-w-[255px] md:p-4 flex-col items-center overflow-hidden md:h-[91vh]">
            <div className="px-[0.5rem] w-[260px] ">

              <div className="text-[14px] hover:rounded-[8px] transition-all hover:bg-[#dfe7fd] cursor-pointer text-[#323232] flex-col p-3 flex items-center justify-between group">

                <div
                  className="w-full transition-all hover:bg-[#dfe7fd] cursor-pointer text-[#323232] flex items-center justify-between">
                  Language
                  <div>
                    <img
                      className="group-hover:rotate-0 rotate-180 transition-transform delay-200"
                      src="https://cdn.hugeicons.com/icons/arrow-up-01-stroke-sharp.svg"
                      alt="toggle"
                    />
                  </div>
                </div>

                <div className="group-hover:pt-2 w-full max-h-0 transition-all overflow-y-scroll genNav group-hover:max-h-[300px] duration-500 ease-in-out">
                  <div className="w-full p-[10.5px]" >Hindi</div>
                  <div className="w-full p-[10.5px]" >Bengali</div>
                  <div className="w-full p-[10.5px]" >English</div>
                  <div className="w-full p-[10.5px]" >Kannada</div>
                  <div className="w-full p-[10.5px]" >Malyalam</div>
                  <div className="w-full p-[10.5px]" >Chinese</div>
                  <div className="w-full p-[10.5px]" >Fan Hindi</div>
                  <div className="w-full p-[10.5px]" >Japaneses</div>
                  <div className="w-full p-[10.5px]" >Korean</div>
                  <div className="w-full p-[10.5px]" >Marathi</div>
                </div>

              </div>

              <div className="text-[14px] hover:rounded-[8px] transition-all hover:bg-[#dfe7fd] cursor-pointer text-[#323232] flex-col p-3 flex items-center justify-between group">

                <div
                  className="w-full transition-all hover:bg-[#dfe7fd] cursor-pointer text-[#323232] flex items-center justify-between">
                  Gender
                  <div>
                    <img
                      className="group-hover:rotate-0 rotate-180 transition-transform delay-200"
                      src="https://cdn.hugeicons.com/icons/arrow-up-01-stroke-sharp.svg"
                      alt="toggle"
                    />
                  </div>
                </div>

                <div className="genNav group-hover:pt-2 w-full max-h-0 transition-all overflow-hidden group-hover:max-h-[430px] overflow-y-scroll duration-500 ease-in-out">
                  <div className="w-full p-[10.5px]" >Action</div>
                  <div className="w-full p-[10.5px]" >Adventure</div>
                  <div className="w-full p-[10.5px]" >Animation</div>
                  <div className="w-full p-[10.5px]" >Comedy</div>
                  <div className="w-full p-[10.5px]" >Crime</div>
                  <div className="w-full p-[10.5px]" >Drama</div>
                  <div className="w-full p-[10.5px]" >Family</div>
                  <div className="w-full p-[10.5px]" >Fantasy</div>
                  <div className="w-full p-[10.5px]" >Horror</div>
                  <div className="w-full p-[10.5px]" >Kids</div>
                  <div className="w-full p-[10.5px]" >Martial ART</div>
                  <div className="w-full p-[10.5px]" >Mystery</div>
                  <div className="w-full p-[10.5px]" >Romance</div>
                  <div className="w-full p-[10.5px]" >Sci fi</div>
                  <div className="w-full p-[10.5px]" >Sci-Fi & Fantasy</div>
                  <div className="w-full p-[10.5px]" >Superhero</div>
                  <div className="w-full p-[10.5px]" >Thriller</div>
                  <div className="w-full p-[10.5px]" >War</div>
                </div>

              </div>


              <div className="text-[14px] text-[#323232] p-3 transition-all hover:bg-[#dfe7fd] hover:rounded-[8px] cursor-pointer">
                crunchyroll
              </div>

              <div className="text-[14px] text-[#323232] p-3 transition-all hover:bg-[#dfe7fd] hover:rounded-[8px] cursor-pointer">
                netflix
              </div>

              <div className="text-[14px] text-[#323232] p-3 transition-all hover:bg-[#dfe7fd] hover:rounded-[8px] cursor-pointer">
                hungama
              </div>

              <div className="text-[14px] text-[#323232] p-3 transition-all hover:bg-[#dfe7fd] hover:rounded-[8px] cursor-pointer">
                disney
              </div>

              <div className="text-[14px] text-[#323232] p-3 transition-all hover:bg-[#dfe7fd] hover:rounded-[8px] cursor-pointer">
                cartoon network
              </div>

              <div className="text-[14px] text-[#323232] p-3 transition-all hover:bg-[#dfe7fd] hover:rounded-[8px] cursor-pointer">
                nickelodean
              </div>

              <div className="text-[14px] text-[#323232] p-3 transition-all hover:bg-[#dfe7fd] hover:rounded-[8px] cursor-pointer">
                kinds zone pluse
              </div>

              <div className="text-[14px] text-[#323232] p-3 transition-all hover:bg-[#dfe7fd] hover:rounded-[8px] cursor-pointer">
                sony yay
              </div>

              <div className="text-[14px] text-[#323232] p-3 transition-all hover:bg-[#dfe7fd] hover:rounded-[8px] cursor-pointer">
                etv bal bharti
              </div>

            </div>
          </div>

          {loading && (
            <>
              <div className="p-4 h-[91vh] w-full flex justify-center items-center">
                <div className="text-[#212529]">
                  <img
                    draggable="false"
                    className="w-[300px] md:w-[425px]" // Adjust width for mobile screens
                    src="https://i.pinimg.com/originals/6d/3c/d3/6d3cd3e883bfe9d7c7cbecd9b0b5174e.gif"
                    alt="Loading"
                  />
                </div>
              </div>
            </>
          )}


          <motion.div
            initial={{ opacity: 0, scale: 0.5 }} // Initial state
            animate={{ opacity: 1, scale: 1 }} // Animate when in view
            transition={{ duration: 0.8 }} // Animation duration
            className={!loading ? `p-4 h-[91vh] overflow-y-scroll` : `hidden`}
          >
            {search && (
              <>
                <div className="w-full md:w-[1000px] h-[600px] overflow-y-scroll bg-[#474747] absolute z-50 p-4">
                  <div className="flex flex-col p-2 space-y-2">
                    Auto complete
                    {search?.autocomplete?.map((r) => (
                      <div className="flex flex-col bg-green-500/30 px-4 py-1">
                        <span key={r?.id}>{r}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col p-2 space-y-2">
                    Series
                    {search?.result?.series?.map((r) => (
                      <div
                      key={r?.id}
                        onClick={() =>
                          router.push(
                            `/details?q=${r?.link ? r.link.split(".co/")[1].split("/?h")[0] : ""}`
                          )
                        }
                        className="flex flex-col bg-green-500/30 px-4 py-1 cursor-pointer"
                      >
                        <span>{r.title}</span>
                        <span>{r.resume.split("<")[0]}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col p-2 space-y-2">
                    Movies
                    {search?.result?.movies?.map((r) => (
                      <div  key={r?.id} className="flex flex-col bg-green-500/30 px-4 py-1">
                        <span>{r.title}</span>
                        <span>{r.resume.split("<")[0]}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            <div>
              <div className="text-[1.25rem] text-[#212529] font-bold fam">
                {alldata && <>Latest Episodes</>}
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-5 p-4">
                {alldata &&
                  alldata?.latestEpisodeArry?.map((item) => (
                    <div
                      className="border border-[#fff] truncate w-full flex justify-center flex-col"
                      key={item.id}
                    >
                      <motion.div
                        initial={{ opacity: 0, scale: 0.5, y: -100 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        onClick={() =>
                          router.push(`/watch?q=${item?.href ? item.href.split(".co/")[1] : ""}`)
                        }
                        className="relative rounded-[8px] group overflow-hidden flex justify-center items-start"
                      >
                        <img
                          className={
                            item?.imgSrc && item.imgSrc.includes("noimg-episode.png")
                              ? "rounded-[8px] group-hover:opacity-90 ease-in bg-cover bg-center h-[128px]"
                              : `group-hover:scale-150 rounded-[8px] group-hover:opacity-90 ease-in bg-cover bg-center`
                          }
                          src={
                            item?.imgSrc && item.imgSrc.includes("noimg-episode.png")
                              ? "https://i.pinimg.com/736x/c9/22/68/c92268d92cf2dbf96e3195683d9e14fb.jpg"
                              : `${item.imgSrc.split("p/w")[0]}p/w500/${item.imgSrc.split("p/w")[1]?.split("/")[1]}`
                          }
                          alt={item.title}
                          style={{ transitionDuration: "1s" }}
                        />

                        <div className="bg-[#2c2c2c31] justify-center items-center hover:cursor-pointer absolute top-0 hidden group-hover:flex rounded-[8px] w-full h-full transition-all duration-500 delay-200 ease-in-out">
                          <img className="w-[60px]" src="https://cdn.hugeicons.com/icons/play-circle-bulk-rounded.svg" alt="Play button" />
                        </div>
                      </motion.div>

                      <div className="flex flex-col text-gray-500 dark:text-gray-400 truncate px-5 py-2">
                        <div className="truncate text-[#212529] font-[500]">{item.title}</div>
                        <div className="truncate text-[#212529cb] text-[12px]">epi: {item.numEpi}</div>
                        <div className="truncate text-[#212529cb] text-[12px]">time: {item.time}</div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>


            <div>
              <div className="text-[1.25rem] text-[#212529] font-bold fam">
                {alldata && <>Latest Series</>}
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-5 p-4">
                {alldata &&
                  alldata?.latestSeriesArry?.map((item) => (
                    <motion.div
                      onClick={() =>
                        router.push(`/details?q=${item?.href ? item.href.split(".co/")[1] : ""}`)
                      }
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8 }}
                      className="border hover:cursor-pointer border-[#fff] truncate w-full flex justify-center flex-col"
                      key={item.id}
                    >
                      <img className="rounded-[8px]" src={item.imgSrc} alt={item.title} />
                      <div className="flex flex-col text-gray-500 dark:text-gray-400 truncate px-5 py-2">
                        <div className="truncate text-[#212529] font-[500]">{item.title}</div>
                        <div className="truncate text-[#212529cb] text-[12px]">{item.vote}</div>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </div>


            <div>
              <div className="text-[1.25rem] text-[#212529] font-bold fam">
                {alldata && <>Latest Movies</>}
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-5 p-4">
                {alldata &&
                  alldata?.latestMoviesArry?.map((item) => (
                    <div className="border border-[#fff] truncate w-full flex justify-center flex-col" key={item.id}>
                      <img className="rounded-[8px]" src={item.imgSrc} alt={item.title} />
                      <div className="flex flex-col text-gray-500 dark:text-gray-400 truncate px-5 py-2">
                        <div className="truncate text-[#212529] font-[500]">{item.title}</div>
                        <div className="truncate text-[#212529cb] text-[12px]">{item.vote}</div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>


            <div>
              <div className="text-[1.25rem] text-[#212529] font-bold fam">
                {alldata && <>Random Movies</>}
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-5 p-4">
                {alldata &&
                  alldata?.randomMoviesArry?.map((item) => (
                    <div className="border border-[#fff] truncate w-full flex justify-center flex-col" key={item.id}>
                      <img className="rounded-[8px]" src={item.imgSrc} alt={item.title} />
                      <div className="flex flex-col text-gray-500 dark:text-gray-400 truncate px-5 py-2">
                        <div className="truncate text-[#212529] font-[500]">{item.title}</div>
                        <div className="truncate text-[#212529cb] text-[12px]">{item.vote}</div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>


            <div>
              <div className="text-[1.25rem] text-[#212529] font-bold fam">
                {alldata && <>Random Series</>}
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-5 p-4">
                {alldata &&
                  alldata?.randomSeriesArry?.map((item) => (
                    <div
                      onClick={() =>
                        router.push(`/details?q=${item?.href ? item.href.split(".co/")[1] : ""}`)
                      }
                      className="border border-[#fff] truncate w-full flex justify-center flex-col"
                      key={item.id}
                    >
                      <img className="rounded-[8px]" src={item.imgSrc} alt={item.title} />
                      <div className="flex flex-col text-gray-500 dark:text-gray-400 truncate px-5 py-2">
                        <div className="truncate text-[#212529] font-[500]">{item.title}</div>
                        <div className="truncate text-[#212529cb] text-[12px]">{item.vote}</div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

          </motion.div>
        </div>
        <Footer/>

      </div>
    </>
  );
}
