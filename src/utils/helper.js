export function sumFormatter (val) {
    let valueAsString = String(val);
    return valueAsString
        .replace(/\D/g, '')
        .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export function strapiLogoRetriever (obj) {
    return obj.attributes.logo.data.attributes.url
}