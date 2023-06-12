import store from "../../Store/store";
import {observer} from "mobx-react-lite";
import {useRef} from "react";
import {useRouter} from "next/router";
import {useTranslation} from "next-i18next";

const SearchWraper = () => {
    const {t} = useTranslation('common')
    const {search, changeSearch} = store
    const searchInputRef = useRef()
    const {push} = useRouter()

    return (
        <div className={"search-overlay " + (search ? 'search-visible' : '')}>
            <div onClick={() => {
                changeSearch()
                searchInputRef.current!.value = ''
            }} className="close-search"></div>
            <div className="wrapper-search">
                <i onClick={changeSearch} style={{fontSize:20, position:'absolute', right:20, top:20,cursor:'pointer'}} className="fa fa-close"></i>
                <form role="search" method="get" className="search-from ajax-search" onSubmit={(e) => {
                    e.preventDefault()
                    changeSearch()
                    push("/search/" + searchInputRef.current?.value).then(() => {
                        searchInputRef.current!.value = ''
                    })
                }}>
                    <div className="search-box">
                        <button id="searchsubmit" className="btn" type="submit">
                            <i className="icon-search"></i>
                        </button>
                        <input ref={searchInputRef} id="myInput" type="text" autoComplete="off"  name="s" className="input-search s"
                               placeholder={t('search').toString()}/>
                            <div onClick={() => {
                                searchInputRef.current!.value = ''
                            }} className="search-top">
                                <div className="close-search">{t('cancel')}</div>
                            </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default observer(SearchWraper);