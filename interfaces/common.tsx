export interface productItem {
    "id": number,
    "photo": string,
    "status": number,
    "name": string,
    "photos": productPhotos[]
    translations: productsTranslationItem[],
    created_at: string
}


interface productPhotos {
    "id": number,
    "product_id": number,
    "photo": string
}

interface productsTranslationItem {
    "id": number,
    "product_id": number,
    "locale": string,
    "name": string,
    "description": string,
}


export interface sliderItem {
    "id": number,
    "photo": string,
    "alt": string,
    "status": number,
    "order": number,
    "title": string,
    "translations": sliderTranslateitem[]
}


interface sliderTranslateitem {
    "id": number,
    "slider_id": number,
    "locale": string,
    "title": string,
    "description": string
}


export interface settings {
    "id": number,
    "name": string,
    "link": string,
}


export interface partnerItem {
    "id": number,
    "photo": string,
    "link": string,
}