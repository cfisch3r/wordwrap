function wordwrap(text,limit) {
    if (text.length <= limit)
        return text;

    if (text.indexOf(" ") > -1)
        return breakLine(text, limit,1);
    else
        return breakLine(text, limit,0);
}
module.exports = wordwrap;

function breakLine(text, limit, gap) {
    return text.substring(0, limit) + '\n' + text.substring(limit + gap);
}
