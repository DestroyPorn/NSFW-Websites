const nsfwDomainsJson = require('../Lists/simple-list.json')

module.exports = async function (domain) {
    if(nsfwDomainsJson.includes(domain)){
        return true
    } else {
        return false
    }
}