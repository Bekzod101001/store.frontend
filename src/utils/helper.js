export function sumFormatter (val) {
    let valueAsString = String(val);
    return valueAsString
        .replace(/\D/g, '')
        .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export function dateFormatter (val) {
    if(!val) return
    const date = new Date(val)
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()

    return `${day}-${month}-${year}`
}

export function clearFormatNumber (val) {
    return String(val)
        .replaceAll(' ', '')
        .replaceAll('-', '')
}

export function strapiFileUrlRetriever (obj, key) {
    if(Array.isArray(obj.attributes[key].data)) {
        return obj.attributes[key].data.map(item => {
            item = item.attributes.url
            return item
        })
    }
    return obj.attributes[key].data.attributes.url
}