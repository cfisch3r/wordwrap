
const WHITE_SPACE = " ";

const LINE_BREAK = '\n';

function wordwrap(text,limit) {

    function textFitsIntoLimit() {
        return text.length <= limit
    }

    function positionOfSpaceInFirstLine() {
        return text.substring(0, limit + 1).lastIndexOf(WHITE_SPACE);
    }

    function spaceExistsInFirstLine() {
        return positionOfSpaceInFirstLine() > -1;
    }

    function breakLine(breakPosition, gap) {
        return text.substring(0, breakPosition) + LINE_BREAK + wordwrap(text.substring(breakPosition + gap),limit);
    }

    if (textFitsIntoLimit())
        return text;

    if (spaceExistsInFirstLine())
        return breakLine(positionOfSpaceInFirstLine(),1);
    else
        return breakLine(limit,0);
}

module.exports = wordwrap;
