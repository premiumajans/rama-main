import store from "../../Store/store";
import {observer} from "mobx-react-lite";
import {useTranslation} from "next-i18next";
import {useRouter} from "next/router";
import CustomLanguageDropdown from "@/Components/CustomLanguageDropdown/CustomLanguageDropdown";

const MobileMenu = () => {
    const {menu, changeMenu} = store
    const {push} = useRouter()
    const {t} = useTranslation('common')

    return <div className={"site-mobile-navigation mm-wrapper " + (menu ? 'active' : '')}><span onClick={changeMenu}
                                                                                                id="remove-megamenu"
                                                                                                className="remove-megamenu icon-remove"></span>
        <nav id="mobile-main-menu" className="mm-menu">
            <div className="mm-panels">
                <div className="mm-panel mm-opened" id="mm-0">
                    <ul className="menu mm-listview">
                        <li className="level-0 menu-item ">
                            <a onClick={() => {
                                changeMenu()
                                push("/about")


                            }}><span className="menu-item-text">{t('about')}</span></a>

                        </li>
                        <li className="level-0 menu-item">
                            <a onClick={() => {
                                changeMenu()
                                push("/catalog")


                            }}><span className="menu-item-text">{t('catalog')}</span></a>

                        </li>
                        <li className="level-0 menu-item">
                            <a onClick={() => {
                                changeMenu()
                                push("/media")


                            }}><span className="menu-item-text">{t('media')}</span></a>

                        </li>
                        <li className="level-0 menu-item">
                            <a onClick={() => {
                                changeMenu()
                                push("/services")


                            }}><span className="menu-item-text">{t('services')}</span></a>
                        </li>

                        <li className="level-0 menu-item">
                            <a onClick={() => {
                                changeMenu()
                                push("/products")


                            }}><span className="menu-item-text">{t('products')}</span></a>
                        </li>

                        <li className="level-0 menu-item">
                            <a onClick={() => {
                                changeMenu()
                                push("/portfolio")


                            }}><span className="menu-item-text">{t('portfolio')}</span></a>
                        </li>


                        <li className="level-0 menu-item">
                            <a onClick={() => {
                                changeMenu()
                                push("/blog")


                            }}><span className="menu-item-text">{t('blog')}</span></a>
                        </li>

                        <li className="level-0 menu-item">
                            <a onClick={() => {
                                changeMenu()
                                push("/contact")


                            }}><span className="menu-item-text">{t('contact-us')}</span></a>
                        </li>
                        <li><CustomLanguageDropdown direction={'down'}/></li>
                    </ul>
                </div>
            </div>

        </nav>
    </div>
};

export default observer(MobileMenu);