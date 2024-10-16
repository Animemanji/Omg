'use client' 
import { useEffect, useState } from "react"; 
import { useRouter } from "next/navigation";
import Side from "@/components/Side";

export default function WatchPart({id}) {
    const router = useRouter()
    const [alldata, setAllData] = useState() 
    const [loading, setLoading] = useState(false)
    const [frame, setFrame] = useState()

    const get_all_data = async () => {
        setAllData();
        setLoading(true)
        const response = await fetch('/api/watch', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ "query": id }),
        });
        const data = await response.json();
        setLoading(false)
        setAllData(data);
    }

    useEffect(() => {
        get_all_data();
    }, [id])


    return ( 
            <>
                <div className="w-full h-full">

                    <div className="h-[70px] flex flex-row items-center md:px-[5rem] py-4">

                        <div className="hidden md:block">
                            <img
                                onClick={() => router.push(`/`)}
                                className="w-[170px] cursor-pointer" src="https://demo.ramsthemes.online/animace/wp-content/uploads/2021/11/a-logo-red.svg" alt="" />
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

                    <div className="flex flex-row w-full h-full">

                        {loading && <>
                            <div className="p-4 h-[91vh] w-full flex justify-center items-center">
                                <div className=" text-[#212529]">
                                    <img draggable="false" className="w-[250px]" src="https://i.pinimg.com/originals/f4/ed/7a/f4ed7a58996957266401435585604881.gif" alt="" srcset="" />
                                </div>
                            </div>
                        </>}

                        {!loading && <div className={`p-4 h-[91vh] overflow-y-scroll w-full`}>

                            {!loading && (
                                <div className="w-full box-border flex flex-col md:flex-row h-auto md:h-[535px]">
                                    <div className="w-full bg-stone-600 h-[300px] md:h-full">
                                        {alldata && (
                                            <>
                                                <iframe
                                                    src={frame ? frame : alldata.iframeArry[0].src}
                                                    className="w-full h-full"
                                                    allowFullScreen={true}
                                                    frameBorder="0"
                                                ></iframe>
                                            </>
                                        )}
                                    </div>
                                    {!loading && (
                                        <div className="flex flex-wrap justify-center py-2">
                                            {alldata && alldata.iframeArry.map(r => (
                                                <div className="px-2" key={r.src}>
                                                    <button
                                                        onClick={() => { setFrame(r.src) }}
                                                        className="py-[6px] px-[12px] transition-all bg-slate-400 hover:bg-slate-400/75 active:bg-slate-400/50 rounded-md"
                                                    >
                                                        server{r.src.split('trembed=')[1].split('&')[0]}
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                    <div className="min-w-full mt-[30px] md:min-w-[370px] max-w-full md:max-w-[370px] h-auto md:h-full px-4 flex flex-col justify-start">
                                        {alldata && (
                                            <>
                                                <div className="">
                                                    <img
                                                        className="w-[200px] md:w-[250px] h-auto mx-auto"
                                                        src={`${alldata.postThumbnail.split('p/w')[0]}p/w500/${alldata.postThumbnail.split('p/w')[1]?.split('/')[1]}`}
                                                        alt=""
                                                    />
                                                    <div className="flex flex-col mt-[30px]">
                                                        <div className="truncate text-[#212529] font-[500]">
                                                            {alldata.title}
                                                        </div>
                                                        <div className="relative">
                                                            <div className="line-clamp-2 text-[#212529cb] text-[12px] min-h-[135px] max-h-[135px] overflow-hidden">
                                                                {alldata.description}
                                                                <div className="absolute bottom-0 w-full bg-gradient-to-t from-white to-transparent h-[20px] select-none "></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </div>
                            )}



                            {!loading && (
                                <div className="p-2 w-full box-border">
                                    <div className="grid grid-cols-3 gap-5 p-4">
                                        {alldata?.sessionEpisodesArray?.map((item) => (
                                            <div
                                                onClick={() => router.push(`/watch?q=${item?.href ? item.href.split('.co/')[1] : ''}`)}
                                                className="border border-[#fff] truncate w-full flex flex-col justify-center"
                                                key={item.id}
                                            >
                                                <div className="relative rounded-[8px] group overflow-hidden">
                                                    <img
                                                        className="group-hover:scale-150 rounded-[8px] group-hover:opacity-90 ease-in w-full"
                                                        src={`${item.postThumbnail.split('p/w')[0]}p/w500/${item.postThumbnail.split('p/w')[1].split('/')[1]}`}
                                                        alt={item.h2}
                                                        style={{ transitionDuration: '5s' }}
                                                    />
                                                    <div className="bg-[#2c2c2c31] flex justify-center items-center absolute top-0 hidden group-hover:flex rounded-[8px] w-full h-full transition-all duration-500 ease-in-out">
                                                        <img className="w-[60px]" src="https://cdn.hugeicons.com/icons/play-circle-bulk-rounded.svg" alt="Play button" />
                                                    </div>
                                                </div>
                                                <div className="flex flex-col text-gray-500 truncate px-5 py-2">
                                                    <div className="truncate text-[#212529] font-[500]">{item.h2}</div>
                                                    <div className="truncate text-[#212529cb] text-[12px]">epi: {item.numEpi}</div>
                                                    <div className="truncate text-[#212529cb] text-[12px]">time: {item.time}</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}



                        </div>}

                    </div>
                </div>
            </> 
    );
}