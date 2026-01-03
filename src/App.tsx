import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import FAQ from './pages/faq';
import Resources from './pages/resources';
import Gallery from './pages/gallery';
import About from './pages/about';

import './App.css'
import './index.css'

import { Logo, IconLogo } from "./logo-aimage/logo"
import DevByIcon from './logo-aimage/devByIcon';

import { Button } from './components/ui/button';

// Select
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./components/ui/select";

// Tootstipe
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./components/ui/tooltip";

// Icons
import { BiSolidDonateHeart } from "react-icons/bi";
import { FaExternalLinkAlt, FaReddit } from 'react-icons/fa';
import { IoMdHome } from "react-icons/io";
import { FaQuestion } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaCode } from "react-icons/fa";
import { IoLayers } from "react-icons/io5";
import { IoIosGlobe } from "react-icons/io";
import { MdInsertPhoto } from "react-icons/md";
import { FaInfoCircle } from "react-icons/fa";


function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const scrollListener = () => {
      setIsScrolled(window.scrollY > 0);
    }

    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  })

  const location = useLocation();
  const { t, i18n } = useTranslation();
  
  useEffect(() => {
    const lang = localStorage.getItem('lang')
    if (lang) {
      i18n.changeLanguage(lang)
    }
  }, [])

  const apiAImageData = "https://api.npoint.io/e6a310b9ebd8db695045"

  const [aImageData, setAImageData] = useState<any>({});

  useEffect(() => {
    fetch(apiAImageData)
      .then(response => response.json())
      .then(data => setAImageData(data))
      .catch(error => console.error(error));
  }, []);

  const navigate = useNavigate();

  const headerClassNoScroll = 'p-2.5 z-50 text-white w-full h-[50px] flex items-center justify-center fixed top-0 bg-transparent transition-all duration-300';
  const headerClassScrolled = 'p-2.5 z-50 w-full h-[50px] flex items-center justify-center fixed top-0 bg-background/95 shadow-md backdrop-blur-sm transition-all duration-300';

  const footerColumnClass = 'flex flex-col items-start gap-2';
  const footerColumnListTitleClass = 'text-lg font-bold';
  const footerColumnListClass = 'flex flex-col items-start gap-2';

  return (
    <>
      {/* Header */}
      <header className={isScrolled ? headerClassScrolled : headerClassNoScroll}>
        <div className='flex w-full md:w-[70%] justify-between'>
          <Logo className='w-[130px] h-[50px] hidden md:block' />
          <IconLogo className='w-[50px] h-[50px] md:hidden' />
          <div className='flex items-center gap-2'>
            <Select
              value={i18n.language}
              onValueChange={
                (value) => {
                  i18n.changeLanguage(value)
                  localStorage.setItem('lang', value)
                }
              }
            >
              <SelectTrigger className='bg-background text-black'>
                <IoIosGlobe />
                <SelectValue placeholder="Select Language" />
              </SelectTrigger>
              <SelectContent className='rounded-2xl'>
                <SelectItem value="en">EN</SelectItem>
                <SelectItem value="pt">PT</SelectItem>
              </SelectContent>
            </Select>
            <Button variant={'outline'} className='text-black' onClick={() => { window.location.href = 'https://buymeacoffee.com/antonioluc8' }}>
              <BiSolidDonateHeart />
              {t("app.header.donateButton")}
            </Button>
          </div>
        </div>
      </header>

      {/* Routes */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/faq' element={<FAQ />} />
        <Route path='/resources' element={<Resources />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/about' element={<About />} />
      </Routes>

      {/* NavBar */}
      <div className='shadow-lg shadow-black/20 border-2 border-border mb-3 md:w-auto rounded-full bg-background p-[5px] flex items-center justify-center gap-[5px] fixed bottom-0 z-50'>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Button variant={location.pathname === '/' ? 'default' : 'ghost'} size={'lg'} onClick={() => navigate('/')}>
                <IoMdHome />
                {location.pathname === '/' ? t("app.dockNavBar.homeButton") : ''}
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>{t("app.dockNavBar.homeButton")}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Button variant={location.pathname === '/faq' ? 'default' : 'ghost'} size={'lg'} onClick={() => navigate('/faq')}>
                <FaQuestion />
                {location.pathname === '/faq' ? t("app.dockNavBar.faqButton") : ''}
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>{t("app.dockNavBar.faqButton")}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Button variant={location.pathname === '/resources' ? 'default' : 'ghost'} size={'lg'} onClick={() => navigate('/resources')}>
                <IoLayers />
                {location.pathname === '/resources' ? t("app.dockNavBar.resourcesButton") : ''}
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>{t("app.dockNavBar.resourcesButton")}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Button variant={location.pathname === '/gallery' ? 'default' : 'ghost'} size={'lg'} onClick={() => navigate('/gallery')}>
                <MdInsertPhoto />
                {location.pathname === '/gallery' ? t("app.dockNavBar.galleryButton") : ''}
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>{t("app.dockNavBar.galleryButton")}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Button variant={location.pathname === '/about' ? 'default' : 'ghost'} size={'lg'} onClick={() => navigate('/about')}>
                <FaInfoCircle className='size-[13px]' />
                {location.pathname === '/about' ? t("app.dockNavBar.aboutButton") : ''}
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>{t("app.dockNavBar.aboutButton")}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      {/* Footer */}
      <footer className='w-full bg-primary text-background px-5 pt-[40px] pb-[100px] flex items-center justify-center'>
        <div className='flex flex-col w-full md:w-[70%] justify-center items-center gap-2'>
          <div className='flex flex-col w-full md:flex-row gap-6 justify-between'>
            <div className={footerColumnClass}>
              <h4 className={footerColumnListTitleClass}>Links</h4>
              <ul className={footerColumnListClass}>
                <li>
                  <Button variant={'link'} className='text-background/40 font-[Roboto]' onClick={() => { window.location.href = 'https://buymeacoffee.com/antonioluc8' }}>
                    <BiSolidDonateHeart />
                    Donate
                  </Button>
                </li>
                <li>
                  <Button variant={'link'} className='text-background/40 font-[Roboto]' onClick={() => navigate('/faq')}>
                    <FaQuestion />
                    FAQs
                  </Button>
                </li>
                <li>
                  <Button variant={'link'} disabled={aImageData?.buttonsStart?.goDownloadApp?.link === ""} className='text-background/40 font-[Roboto]' onClick={() => { }}>
                    <MdDownload size={'lg'} />
                    Download (Android)
                  </Button>
                </li>
                <li>
                  <Button variant={'link'} disabled={aImageData?.buttonsStart?.goSite?.link === ""} className='text-background/40 font-[Roboto]' onClick={() => { }}>
                    <FaExternalLinkAlt />
                    AImage Web
                  </Button>
                </li>
                <li>
                  <Button variant={'link'} className='text-background/40 font-[Roboto]' onClick={() => { window.location.href = 'https://enter.pollinations.ai' }}>
                    <FaExternalLinkAlt />
                    API Pollinations.ai
                  </Button>
                </li>
                <li>
                  <Button variant={'link'} className='text-background/40 font-[Roboto]' onClick={() => { window.location.href = 'https://github.com/hoyol-foundation/AImage-app' }}>
                    <FaCode />
                    Source Code
                  </Button>
                </li>
              </ul>
            </div>

            <div className={footerColumnClass}>
              <h4 className={footerColumnListTitleClass}>{t("app.footer.titlesColumn.socialLinksTitle")}</h4>
              <ul className={footerColumnListClass}>
                <li>
                  <Button variant={'link'} className='text-background/40 font-[Roboto]' onClick={() => { window.location.href = 'https://github.com/hoyol-foundation' }}>
                    <FaGithub />
                    GitHub - Hoyol Foundation
                  </Button>
                </li>
                <li>
                  <Button variant={'link'} className='text-background/40 font-[Roboto]' onClick={() => { window.location.href = 'https://github.com/LuquinhasAMC' }}>
                    <FaGithub />
                    GitHub - Dev
                  </Button>
                </li>
                <li>
                  <Button variant={'link'} className='text-background/40 font-[Roboto]' onClick={() => { window.location.href = 'https://www.youtube.com/@LuquinhasAMC15' }}>
                    <FaYoutube />
                    YouTube - Dev
                  </Button>
                </li>
                <li>
                  <Button variant={'link'} className='text-background/40 font-[Roboto]' onClick={() => { window.location.href = 'https://www.tiktok.com/@luquinhasamc15?is_from_webapp=1&sender_device=pc' }}>
                    <FaTiktok />
                    TikTok - Dev
                  </Button>
                </li>
                <li>
                  <Button variant={'link'} className='text-background/40 font-[Roboto]' onClick={() => { window.location.href = 'https://x.com/Lucasmendescru2' }}>
                    <FaSquareXTwitter />
                    X (Twitter) - Dev
                  </Button>
                </li>
                <li>
                  <Button variant={'link'} className='text-background/40 font-[Roboto]' onClick={() => { window.location.href = 'https://www.reddit.com/user/LucasAMC13' }}>
                    <FaReddit />
                    Reddit - Dev
                  </Button>
                </li>
              </ul>
            </div>

            <div className={footerColumnClass}>
              <h4 className={footerColumnListTitleClass}>{t("app.footer.titlesColumn.creditsTitle")}</h4>
              <ul className={footerColumnListClass}>
                <li className='pl-4.5 pb-2 font-[Roboto] text-background/40'>
                  Dev - <span className='font-bold font-[Roboto]'>LuquinhasAMC</span>
                </li>
                <li className='pl-4.5 pb-2 font-[Roboto] text-background/40'>
                  API Supported - <span className='font-bold font-[Roboto]'>Pollinations.ai</span>
                </li>
                <li className='pl-4.5 pb-2 font-[Roboto] text-background/40'>
                  Source Code - <span className='font-bold font-[Roboto]'>Hoyol Foundation</span>
                </li>
                <li className='pl-4.5 pb-2 font-[Roboto] text-background/40'>
                  Design - <span className='font-bold font-[Roboto]'>LuquinhasAMC</span>
                </li>
                <li className='pl-4.5 pb-2 font-[Roboto] text-background/40'>
                  UI Library - <span className='font-bold font-[Roboto]'>Shadcn UI</span>
                </li>
                <li className='pl-4.5 pb-2 font-[Roboto] text-background/40'>
                  Icons - <span className='font-bold font-[Roboto]'>React Icons</span>
                </li>
                <li className='pl-4.5 pb-2 font-[Roboto] text-background/40'>
                  Deploy - <span className='font-bold font-[Roboto]'>Vercel</span>
                </li>
                <li className='pl-4.5 pb-2 font-[Roboto] text-background/40'>
                  Mobile Version - <span className='font-bold font-[Roboto]'>Capacitor</span>
                </li>
              </ul>
            </div>

          </div>

          <div className='flex flex-col md:flex-row mt-5 items-center gap-2'>
            <DevByIcon className='w-[200px] h-[50px]' />
            <span className='w-[50px] md:w-[1px] h-[1px] md:h-[50px] bg-background/40'></span>
            <Logo className='w-[130px] h-[50px]' />
          </div>
          <p className='text-muted-foreground text-center text-sm mt-5'>AImage Developed by <span className='font-bold'>Hoyol Foundation - MIT License</span></p>

          <p className='text-center text-sm mt-5'>{t("app.footer.finalMessage")}</p>
        </div>
      </footer>
    </>
  )
}

export default App
