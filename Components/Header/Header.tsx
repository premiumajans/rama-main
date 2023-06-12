import header from './Header.module.scss'
import Link from "next/link";
import Image from "next/image";
import {usePathname} from "next/navigation";
import store from "../../Store/store";
import {observer} from "mobx-react-lite";
import CustomLanguageDropdown from "../CustomLanguageDropdown/CustomLanguageDropdown";
import {i18n, useTranslation} from "next-i18next";
import {useEffect} from "react";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

const Header = () => {
    const {t} = useTranslation('common')
    const path = usePathname()
    const {changeSearch,changeMenu,changeSettings,settings} = store

    useEffect(() => {
        changeSettings()
    },[])



    return ( <header id="site-header" className={`site-header header-v2 ${header.header}`}>
            <div id="header-topbar" className="topbar-v1 hidden-sm hidden-xs">
                <div className="topbar-inner">
                    <div className="section-padding">
                        <div className="section-container large p-l-r">
                            <div className="row">
                                <div className="col-md-12 topbar-right">
                                    <ul id="topbar-menu" className="menu">
                                        <li className="menu-item"><a href={settings.find(item => item.name === 'facebook')?.link}><i className="fa fa-facebook"></i></a>
                                        </li>
                                        <li className="menu-item"><a href={settings.find(item => item.name === 'linkedin')?.link}><i
                                            className="fa fa-linkedin"></i></a></li>
                                        <li className="menu-item"><a href={settings.find(item => item.name === 'instagram')?.link}><i
                                            className="fa fa-instagram"></i></a></li>
                                        <li className="menu-item"><a href={settings.find(item => item.name === 'youtube')?.link}><i
                                            className="fa fa-youtube"></i></a></li>

                                    </ul>
                                    <CustomLanguageDropdown direction={'down'} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="header-mobile">
                <div className="section-padding">
                    <div className="section-container large">
                        <div className="row flex-row-reverse">
                            <div style={{display:'flex', justifyContent:'flex-end'}} className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 header-left">
                                <div  className="navbar-header">
                                    <button onClick={changeMenu} type="button" id="show-megamenu" className="navbar-toggle"></button>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 header-center">
                                <div style={{textAlign:'left'}}   className="site-logo">
                                    <Link href={"/"}>
                                        <Image  width="100" height="100" src="/media/rama_group.png"
                                             alt="Rama Group – Furniture HTML Theme"/>
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/*<div className="header-mobile-fixed">*/}

                {/*    <div className="header-page-link">*/}
                {/*        <div onClick={changeSearch} className="search-box">*/}
                {/*            <div className="search-toggle"><i className="wpb-icon-magnifying-glass"></i></div>*/}
                {/*        </div>*/}
                {/*    </div>*/}

                {/*</div>*/}
            </div>

            <div className="header-desktop">
                <div className="header-wrapper">
                    <div className="section-padding">
                        <div className="section-container large p-l-r">
                            <div className="row flex-row-reverse">
                                <div className="col-10 header-right">
                                    <div className="site-navigation">

                                        <nav id="main-navigation">
                                            <ul id="menu-main-menu" className="menu">
                                                <li className={"level-0 menu-item " + (path === ("/about") ? 'current-menu-item' : '')}>
                                                    <Link href={"/about"} locale={i18n?.language}><span
                                                        className="menu-item-text">{t('about')}</span></Link>
                                                </li>
                                                <li className={"level-0 menu-item " + (path === ("/catalog") ? 'current-menu-item' : '')}>
                                                    <Link href={"/catalog"}  locale={i18n?.language}><span
                                                        className="menu-item-text">{t('catalog')}</span></Link>
                                                </li>
                                                <li className={"level-0 menu-item " + (path === ("/media") ? 'current-menu-item' : '')}>
                                                    <Link href={"/media"}  locale={i18n?.language}><span
                                                        className="menu-item-text">{t('media')}</span></Link>
                                                </li>
                                                <li className={"level-0 menu-item " + (path === ('/services') ? 'current-menu-item' : '')}>
                                                    <Link href={"/services"}  locale={i18n?.language}><span
                                                        className="menu-item-text">{t('services')}</span></Link>
                                                </li>
                                                <li className={"level-0 menu-item " + (path === ("/products") ? 'current-menu-item' : '')}>
                                                    <Link href={"/products"}  locale={i18n?.language}><span
                                                        className="menu-item-text">{t('products')}</span></Link>
                                                </li>
                                                <li className={"level-0 menu-item " + (path === ("/portfolio") ? 'current-menu-item' : '')}>
                                                    <Link href={"/portfolio"}  locale={i18n?.language}><span
                                                        className="menu-item-text">{t('portfolio')}</span></Link>
                                                </li>
                                                <li className={"level-0 menu-item " + (path === ('/blog') ? 'current-menu-item' : '')}>
                                                    <Link href={"/blog"}  locale={i18n?.language}><span
                                                        className="menu-item-text">{t('blog')}</span></Link>
                                                </li>

                                                <li className={"level-0 menu-item " + (path === ('/contact') ? 'current-menu-item' : '')}>
                                                    <Link href={"/contact"}  locale={i18n?.language}><span
                                                        className="menu-item-text">{t('contact-us')}</span></Link>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                    {/*<div className="header-page-link">*/}
                                    {/*    <div onClick={changeSearch} className="search-box ml-4">*/}
                                    {/*        <div className="search-toggle"><i className="icon-search"></i></div>*/}
                                    {/*    </div>*/}
                                    {/*</div>*/}
                                </div>

                                <div className=" col-2 text-center header-center">
                                    <div style={{textAlign:'left'}} className="site-logo">

                                        <Link href={"/"} locale={i18n?.language}>
                                           <Image width={100} height={100} src={'/media/rama_group.png'} alt={'logo'}/>
                                        </Link>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default observer(Header);





