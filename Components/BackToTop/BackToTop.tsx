'use client'
const BackToTop = () => {
    return <div onClick={() => {
        window?.scrollTo({top:0, behavior:'smooth'})
    }}   className="back-top">
        <i className="arrow_carrot-up"></i>
    </div>
};

export default BackToTop;