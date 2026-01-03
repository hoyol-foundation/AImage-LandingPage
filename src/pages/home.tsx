import React, { useEffect, useState }    from 'react';

import mainArt from '../assets/mainArt.jfif'

import { Button } from '../components/ui/button';

// Icons
import { FaExternalLinkAlt } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

import { useTranslation } from 'react-i18next';

export default function Home() {
    const { t, i18n } = useTranslation();
    const atualLang = i18n.language;

    const apiAImageData = "https://api.npoint.io/e6a310b9ebd8db695045"
    
    const [aImageData, setAImageData] = useState<any>({});
    
    useEffect(() => {
        fetch(apiAImageData)
          .then(response => response.json())
          .then(data => setAImageData(data))
          .catch(error => console.error(error));
    }, []);

    const styleBanner = "bg-background mb-2 text-foreground rounded-full p-2 items-center justify-center gap-2 shadow-lg"
    const isDisabledBaner = aImageData?.banner?.showing ? "flex" : "hidden"
    const isLinkOnClickBannerPointer = aImageData?.banner?.linkOnClick ? "cursor-pointer hover:bg-background/70" : ""
    const isLinkOnClickBanner = aImageData?.banner?.linkOnClick ? true : false

    const distaqueTextClass = 'font-[Satisfy] text-[4rem]'
    return (    
        <>
            <main
                className="w-full pt-[50px] pb-[10px] h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
                style={{ backgroundImage: `url(${mainArt})` }}
            >
                <div className='w-full md:w-[70%] px-5 flex flex-col items-center justify-center'>
                    <div className={isDisabledBaner + " " + styleBanner + " " + isLinkOnClickBannerPointer} onClick={() => { if (isLinkOnClickBanner) { window.location.href = aImageData?.banner?.linkOnClick } }}>
                        <span className='text-1xl'>{aImageData?.banner?.iconLeft}</span>
                        {atualLang === "pt" ? <span className='font-[Roboto]'>{aImageData?.banner?.textPT}</span> : <span className='font-[Roboto]'>{aImageData?.banner?.textEN}</span>}
                        {isLinkOnClickBanner ? <IoIosArrowForward /> : ''}
                    </div>
                    
                    <h1 className='text-[clamp(3.5rem,5vw,3rem)] drop-shadow-lg drop-shadow-black/70 leading-16 text-center font-bold text-white'>
                        {t("app.pages.home.mainContent.mainMessage.text")} <span className={distaqueTextClass}>{t("app.pages.home.mainContent.mainMessage.eyeText")}</span>
                    </h1>
                    <p className='text-white text-2xl font-[Roboto] line-clamp-2 text-center mt-5'>
                        {t("app.pages.home.mainContent.mainMessage.buttonText")}
                    </p>

                    <div className='w-full mt-5  flex flex-wrap justify-center gap-[10px]'>
                        <Button variant={'outline'} disabled={aImageData?.buttonsStart?.goSite?.link === ""} className='h-auto w-full items-start md:w-[45%] rounded-2xl'>
                            <div className='flex flex-col w-full'>
                                <h4 className='flex items-center justify-between text-start text-2xl font-bold'>
                                    <span className='w-full text-wrap line-clamp-1'>
                                        {t("app.pages.home.mainContent.butonsMain.buttonGoWebApp.title")}
                                    </span>
                                    <FaExternalLinkAlt className='w-full h-full' />
                                </h4>
                                <p className='text-start font-[Roboto] line-clamp-1 text-wrap text-sm text-muted-foreground'>{t("app.pages.home.mainContent.butonsMain.buttonGoWebApp.description")}</p>
                            </div>
                        </Button>

                        <Button variant={'outline'} disabled={aImageData?.buttonsStart?.goDownloadApp?.link === ""} className='h-auto w-full items-start md:w-[45%] rounded-2xl'>
                            <div className='flex flex-col w-full'>
                                <h4 className='flex items-center justify-between text-start text-2xl font-bold'>
                                    <span className='w-full text-wrap line-clamp-1'>
                                        {t("app.pages.home.mainContent.butonsMain.buttonDownloadApp.title")}
                                    </span>
                                    <FaExternalLinkAlt className='w-full h-full' />
                                </h4>
                                <p className='text-start font-[Roboto] text-wrap line-clamp-1 text-sm text-muted-foreground'>{t("app.pages.home.mainContent.butonsMain.buttonDownloadApp.description")}</p>
                            </div>
                        </Button>
                    </div>
                </div>
            </main>
        </>
    )
}