
const dummyApiResponse = {
    showLightAndDarkMode: false,
    showTicTacToeBoard: true,
    showRandomColorGenerator: true,
    showAccordion: false,
    showTreeView: false
}

function featureFlagsDataServiceCall() {

    return new Promise((resolve, reject) => {
        if(dummyApiResponse) setTimeout(resolve(dummyApiResponse), 500)
        else reject('Some error occured! Please, try again.')
    })
}

export default featureFlagsDataServiceCall