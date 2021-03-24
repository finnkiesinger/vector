function handlify(string) {
    return String(string)
    .toLowerCase()
    .replace(/ä/gi, "ae")
    .replace(/ü/gi, "ue")
    .replace(/ö/gi, "oe")
    .replace(/\s/g, "-")
    .replace(/ß/gi, "ss");
}

module.exports = handlify;