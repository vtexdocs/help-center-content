function fixImageLinks(markdownContent) {
    return markdownContent.replace(
        /\(!?\[([^\]]*)\]\(\s*\/\/(images\.contentful\.com\/[^\)]+)\s*\)/g,
        "([$1](https://$2)"
    );
}

module.exports = { fixImageLinks };
