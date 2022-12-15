export function sumFormatter (val) {
    let valueAsString = String(val);
    return valueAsString
        .replace(/\D/g, '')
        .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export function clearFormatNumber (val) {
    return String(val)
        .replaceAll(' ', '')
        .replaceAll('-', '')
}

export function strapiRetriever (obj, key) {
    return obj.attributes[key].data.attributes.url
}