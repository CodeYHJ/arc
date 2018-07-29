function isElementInViewport (el) {
    var rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
    );
}

function isElementPartiallyInViewport(el) {
    var rect = el.getBoundingClientRect();
    // DOMRect { x: 8, y: 8, width: 100, height: 100, top: 8, right: 108, bottom: 108, left: 8 }
    var windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    var windowWidth = (window.innerWidth || document.documentElement.clientWidth);

    // http://stackoverflow.com/questions/325933/determine-whether-two-date-ranges-overlap
    var vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
    var horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);

    return (vertInView && horInView);
}

function getLangPath(path) {
    let lang = path.split("posts")
    return (lang instanceof Array)? lang[0]: lang
  }

function isHomePath(path) {
    return !path.includes("posts")
}

function classified(v) {
    let categories = new Map
    let currentPages = new Array

    for(var i in v.$site.pages) {
        let page = v.$site.pages[i]
        let langPath = getLangPath(page.path)

        // If page's language is same as the current site's language
        // And it's not homepage
        if(v.$localePath == langPath && !isHomePath(page.path)) { 
            let category
            if(page.frontmatter && page.frontmatter.category) {
                category = page.frontmatter.category
            } else {
                category = v.$localeConfig.unclassified
            }

            if(!categories[category])
                categories[category] = new Array
            
            categories[category].push(page)
            currentPages.push(page)
        }
    }

    return {
        categories: categories, 
        currentPages: currentPages
    }
}

export default { 
    isElementInViewport, 
    isElementPartiallyInViewport,
    isHomePath,
    classified
}