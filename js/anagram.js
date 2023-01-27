window.onload = () => {
    let initData = prompt('Please enter words').split(',');

    let [...wordFirst] = initData[0].trim();
    let [...wordSecond] = initData[1].trim();

    let discrepancies = 0;

    if (wordFirst.length == wordSecond.length) {
        let [...wordFirstSorted] = wordFirst.map(x => x);
        let [...wordSecondSorted] = wordSecond.map(y => y);
        wordFirstSorted.sort();
        wordSecondSorted.sort();
        for (i = 0; i < wordFirstSorted.length; i++) {
            if (wordFirstSorted[i] != wordSecondSorted[i]) {
                discrepancies++;
            }
        }
        if (discrepancies > 0) {
            console.log('Це не анаграми')
        }
        else { console.log('Це анаграми!') }
    }
    else { console.log('Це точно не анаграми') }
}