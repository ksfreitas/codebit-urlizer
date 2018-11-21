function urlizer(value) {
    const src = "áàãâéêíóôõúüñçÁÀÃÂÉÊÍÓÔÕÚÜÑÇ ";
    const dst = "aaaaeeiooouuncAAAAEEIOOOUUNC-";
    let map = {};
    for (let i = 0; i < src.length; i++) {
        map[src.charAt(i)] = dst.charAt(i);
    }

    function replaceAll(str, find, replace) {
        return str.replace(new RegExp(find, 'g'), replace);
    }

    value = value.toLowerCase();
    value = replaceAll(value, '-', ' ');
    value = replaceAll(value, '_', ' ');
    let tmp = '';
    let splited = value.split(' ');
    for (let i = 0; i < splited.length; ++i) {
        const s = splited[i];
        if (s.trim().length != 0) {
            tmp += ' ' + s.trim();
        }
    }
    value = tmp.trim();
    let out = '';
    for (let i = 0; i < value.length; ++i) {
        const char = value.charAt(i);
        const translatedChar = map[char];

        if (translatedChar != null) {
            out += translatedChar;
        } else if (char >= 'a' && char <= 'z' || char >= '0' && char <= '9') {
            out += char;
        }
    }
    return out;
}

function urlizerFilename(filename) {
    var splited = filename.split('.');
    if (splited.length == 1) {
        return urlizer(filename);
    }
    let tmp = '';
    for (var i = 0; i < splited.length - 1; i++) {
        tmp += splited[i];
    }
    return urlizer(tmp) + '.' + splited[splited.length - 1].toLowerCase();
}

module.exports = {
    urlizer: urlizer,
    urlizerFilename: urlizerFilename
};
