'use client'
import PcNav from "@/components/PcNav";
import Side from "@/components/Side"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
export default function DeatailsPart({id}) {
    const router = useRouter()
    const [alldata, setAllData] = useState()
    const [epidata, setEpiData] = useState()
    const [loading, setLoading] = useState(false)

    const get_all_data = async () => {
        setAllData();
        setLoading(true)
        const response = await fetch('/api/details', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ "query": id }),
        });
        const data = await response.json();
        setLoading(false)
        setAllData(data);
    }

    const get_epi_data = async (season, post) => {
        setEpiData();
        setLoading(true)
        const response = await fetch('/api/epiData', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ "season": season, "post": post }),
        });
        const data = await response.json();
        setLoading(false)
        setEpiData(data);
    }

    useEffect(() => {
        get_all_data();
    }, [])

    return (
        <div className="w-full h-full">

            <div className="h-[70px] flex flex-row items-center md:px-[5rem] py-4">

                <div className="hidden md:block">
                    <img className="w-[170px]" src="https://demo.ramsthemes.online/animace/wp-content/uploads/2021/11/a-logo-red.svg" alt="" />
                </div>

                <div className="mx-auto h-full rounded-[8px] ">
                    <div className="border border-[#EFEEEF] h-full w-[275px] md:w-[749px] rounded-[8px] flex flex-row">

                        <input className="text-[12px] text-[#1d1d1d] outline-none w-full h-full px-6 rounded-[8px]" placeholder="Search here..." type="text" />

                        <span className="h-full flex justify-center items-center px-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 512 512"><path d="M460.355 421.59l-106.51-106.512c20.04-27.553 31.884-61.437 31.884-98.037C385.73 124.935 310.792 50 218.685 50c-92.106 0-167.04 74.934-167.04 167.04 0 92.107 74.935 167.042 167.04 167.042 34.912 0 67.352-10.773 94.184-29.158L419.945 462l40.41-40.41zM100.63 217.04c0-65.095 52.96-118.055 118.056-118.055 65.098 0 118.057 52.96 118.057 118.056 0 65.097-52.96 118.057-118.057 118.057-65.096 0-118.055-52.96-118.055-118.056z"></path></svg>
                        </span>

                    </div>
                </div>
                <Side />
            </div>
            <div className="line"></div>

            <div className=" w-full h-full">

                <PcNav />

                {loading && <>
                    <div className="p-4 h-[91vh] w-full flex justify-center items-center">
                        <div className=" text-[#212529]">
                            <img draggable="false" className="w-[250px]" src="https://i.pinimg.com/originals/f4/ed/7a/f4ed7a58996957266401435585604881.gif" alt="" srcset="" />
                        </div>
                    </div>
                </>}


                <div className={!loading ? `p-4 h-[91vh] overflow-y-scroll` : `hidden`}>

                    {alldata && <div className="w-full md:h-auto">

                        <div className="w-full h-full relative">
                            {alldata && <>
                                <div className="w-full h-full flex">
                                    {/* Background Image */}
                                    <div
                                        className="w-full h-[600px] absolute sm:h-[600px] bg-cover bg-center "
                                        style={{
                                            backgroundImage: `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${alldata?.imdbData[0]?.backdrop_path})`,
                                            filter: 'blur(10px)',
                                        }}
                                    >
                                    </div>

                                    {/* Content Section */}
                                    <div className="w-full z-10 bg-[#ffffff42] md:p-6 sm:flex-row items-center sm:items-start sm:absolute sm:top-0 sm:left-0 sm:h-full sm:px-6 sm:py-8">

                                        {/* Main Poster */}
                                        <div className="lex-1 flex justify-center items-center py-4 sm:py-0 mx-auto sm:mx-0">
                                            <img
                                                className="w-[239px] h-[290px] sm:w-[269px] rounded-[15px]"
                                                src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2/${alldata?.imdbData[0]?.poster_path}`}
                                                alt="Movie Poster"
                                            />
                                        </div>

                                        {/* Movie Info */}
                                        <div className="flex flex-col px-4 py-6 w-full sm:w-auto sm:ml-6 sm:py-0 justify-start sm:justify-evenly">
                                            <div className="">
                                                <div className="text-[1.75rem] sm:text-[1.5rem] text-[#212529] font-[800]">
                                                    {alldata?.imdbData[0]?.name}
                                                </div>
                                                <div className="text-[#212529] font-[800] mt-2 sm:mt-4">
                                                    {alldata?.imdbData[0]?.overview}
                                                </div>
                                            </div>

                                            <div className="flex flex-row items-center space-x-3 mt-4 sm:mt-auto">
                                                {/* Vote Average */}
                                                <div className="text-[#212529] space-x-3 py-2 px-5 bg-[#5353537a] rounded-full flex items-center">
                                                    <img
                                                        className="w-[25px]"
                                                        src={
                                                            alldata?.imdbData[0]?.vote_average >= 9
                                                                ? "https://cdn.hugeicons.com/icons/star-solid-rounded.svg"
                                                                : alldata?.imdbData[0]?.vote_average >= 5
                                                                    ? "https://cdn.hugeicons.com/icons/star-bulk-rounded.svg"
                                                                    : "https://cdn.hugeicons.com/icons/star-twotone-rounded.svg"
                                                        }
                                                        alt="Rating Star"
                                                    />
                                                    <div
                                                        className={
                                                            alldata?.imdbData[0]?.vote_average >= 9
                                                                ? `text-[#83ca20] font-[800]`
                                                                : alldata?.imdbData[0]?.vote_average >= 5
                                                                    ? `text-[#d1b721] font-[800]`
                                                                    : `text-[#b6461a] font-[800]`
                                                        }
                                                    >
                                                        {alldata?.imdbData[0]?.vote_average}
                                                    </div>
                                                </div>

                                                {/* Vote Count */}
                                                <div className="text-[#212529] bg-[#5353537a] py-2 px-5 font-bold rounded-full">
                                                    Votes: {alldata?.imdbData[0]?.vote_count}
                                                </div>

                                                {/* Popularity */}
                                                <div className="text-[#212529] bg-[#5353537a] py-2 px-5 font-bold rounded-full">
                                                    Popularity: {alldata?.imdbData[0]?.popularity}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </>}
                        </div>

                        <div className="pt-4 flex flex-row space-x-3 items-center">

                            {alldata && (
                                <div className="text-[1.25rem] text-[#212529] font-bold fam">
                                    Episodes
                                </div>
                            )}

                            <div className="text-[#212529] h-[40px] flex items-center justify-center transition-all cursor-pointer group bg-[#53535342] hover:bg-[#5353537a] rounded-full px-5 py-[5px]">
                                <span className="mx-2 h-[25px]">sessions</span>
                                <div className={alldata?.numberOfSessions.map(r => r.dataSeason[r.dataSeason.length - 1]) < 9 ? `flex flex-row justify-start space-x-3 items-center h-full genNav w-0 group-hover:w-auto group-hover:max-w-[480px] duration-500 ease-in-out group-hover:overflow-x-hidden transition-all` : `flex flex-row justify-start space-x-3 items-center h-full genNav w-0 group-hover:w-auto group-hover:max-w-[480px] duration-500 ease-in-out group-hover:overflow-x-auto transition-all`}>
                                    {alldata && alldata?.numberOfSessions?.map(r => (
                                        <div
                                            onClick={() => { get_epi_data(r.dataSeason, r.dataPost) }}
                                            key={r.dataSeason} className="text-[#212529] rounded-md w-[40px] h-[25px] hidden group-hover:flex flex-row justify-center items-center transition-all cursor-pointer bg-[#53535342] hover:bg-[#5353537a]">
                                            {r.dataSeason}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>


                        <div className="grid grid-cols-3 gap-5 p-4 md:flex md:flex-row md:flex-wrap justify-center md:justify-start items-center md:items-start">
                            {alldata && epidata ? epidata.map((item) => (
                                <div
                                    onClick={() => router.push(`/watch?q=${item?.href ? item.href.split('.co/')[1] : ''}`)}
                                    className="border border-[#fff] truncate w-full md:w-[250px] flex justify-center flex-col" key={item.id}
                                >
                                    <div className="w-full h-auto md:max-h-[130px] relative rounded-[8px] group overflow-hidden">
                                        {/* Image with scale effect on hover */}
                                        <img
                                            className="group-hover:scale-150 rounded-[8px] group-hover:opacity-90 ease-in"
                                            src={`${item.postThumbnail.split('p/w')[0]}p/w500/${item.postThumbnail.split('p/w')[1].split('/')[1]}`}
                                            alt={item.h2}
                                            style={{ transitionDuration: '5s' }} // Long transition duration for scaling
                                        />

                                        {/* Framer Motion animation triggered on in view */}
                                        <div className="bg-[#2c2c2c31] justify-center items-center hover:cursor-pointer absolute top-0 hidden group-hover:flex rounded-[8px] w-full h-full transition-all duration-500 delay-200 ease-in-out">
                                            <img className="w-[60px]" src="https://cdn.hugeicons.com/icons/play-circle-bulk-rounded.svg" alt="Play button" />
                                        </div>
                                    </div>

                                    {/* Text content */}
                                    <div className="flex flex-col text-gray-500 dark:text-gray-400 truncate px-5 py-2">
                                        <div className="truncate text-[#212529] font-[500]">{item.h2}</div>
                                        <div className="truncate text-[#212529cb] text-[12px]">epi: {item.numEpi}</div>
                                    </div>
                                </div>
                            )) : alldata?.sessionEpisodesArray?.map((item) => (
                                <div
                                    onClick={() => router.push(`/watch?q=${item?.href ? item.href.split('.co/')[1] : ''}`)}
                                    className="border border-[#fff] truncate w-full md:w-[250px] flex justify-center flex-col" key={item.id}
                                >
                                    <div className="w-full h-auto md:max-h-[130px] relative rounded-[8px] group overflow-hidden">
                                        {/* Image with scale effect on hover */}
                                        <img
                                            className="group-hover:scale-150 rounded-[8px] group-hover:opacity-90 ease-in"
                                            src={`${item.postThumbnail.split('p/w')[0]}p/w500/${item.postThumbnail.split('p/w')[1].split('/')[1]}`}
                                            alt={item.h2}
                                            style={{ transitionDuration: '5s' }} // Long transition duration for scaling
                                        />

                                        {/* Framer Motion animation triggered on in view */}
                                        <div className="bg-[#2c2c2c31] justify-center items-center hover:cursor-pointer absolute top-0 hidden group-hover:flex rounded-[8px] w-full h-full transition-all duration-500 delay-200 ease-in-out">
                                            <img className="w-[60px]" src="https://cdn.hugeicons.com/icons/play-circle-bulk-rounded.svg" alt="Play button" />
                                        </div>
                                    </div>

                                    {/* Text content */}
                                    <div className="flex flex-col text-gray-500 dark:text-gray-400 truncate px-5 py-2">
                                        <div className="truncate text-[#212529] font-[500]">{item.h2}</div>
                                        <div className="truncate text-[#212529cb] text-[12px]">epi: {item.numEpi}</div>
                                        <div className="truncate text-[#212529cb] text-[12px]">time: {item.time}</div>
                                    </div>
                                </div>
                            ))}
                        </div>


                    </div>}

                </div>


            </div>

        </div>
    )

}