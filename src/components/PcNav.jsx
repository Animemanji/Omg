import React from 'react'

const PcNav = () => {
  return (
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
  )
}

export default PcNav
