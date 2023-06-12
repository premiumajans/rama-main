export function transformDate(dateValue:string) {
    const date = new Date(dateValue); // create a new date object
    return date.toLocaleDateString('de-AT', {day: '2-digit', month: '2-digit', year: 'numeric'});
}