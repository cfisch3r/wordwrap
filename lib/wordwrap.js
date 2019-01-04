const WHITE_SPACE = " ";

function wordwrap(text,limit) {
    if (text.length <= limit)
        return text;

    if (spaceExistsInFirstLine(text, limit))
        return breakLine(text, positionOfSpaceInFirstLine(text, limit),1,limit);
    else
        return breakLine(text, limit,0,limit);
}

module.exports = wordwrap;

function spaceExistsInFirstLine(text, limit) {
    return positionOfSpaceInFirstLine(text, limit) > -1;
}

function positionOfSpaceInFirstLine(text, limit) {
    return text.substring(0, limit + 1).lastIndexOf(WHITE_SPACE);
}

function breakLine(text, breakPosition, gap,limit) {
    return text.substring(0, breakPosition) + '\n' + wordwrap(text.substring(breakPosition + gap),limit);
}
