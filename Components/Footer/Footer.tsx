'use client'
import {usePathname} from "next/navigation";
import {useTranslation} from "next-i18next";
import Link from "next/link";

const Footer = () => {

    const path = usePathname()
    const {t} = useTranslation('common')

    return <>
        {path !== '/' && <footer id="site-footer" className="site-footer background m-t-0">
            <div className="footer-bottom">
                <div className="section-padding">
                    <div className="section-container d-flex justify-content-between flex-wrap">
                        <div className="block-widget-wrap" >
                            <p className="copyright text-center" >{t('copyright')} © {new Date().getFullYear()}. {t('rights')}</p>
                        </div>

                        <div className="block-widget-wrap">
                            <div className="copyright text-center" > <a
                                href="https://www.premium.az/">Premium Advertising</a> </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>}
    </>

};

export default Footer;