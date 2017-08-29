export default csvUrl => {
    /*eslint no-console: 0 */
    const _ = {data: null};

    return {
        name: 'baseCsv',
        urls: csvUrl && [csvUrl],
        onReady(err, csv) {
            this.baseCsv.data(csv);
        },
        data(data) {
            if (data) {
                _.data = data;
            } else {
                return _.data;
            }
        },
        message(fn) {
            _.data = _.data.map(fn);
        },
        allData(all) {
            if (all) {
                _.data = all.data;
            } else {
                const  {data} = _;
                return {data};
            }
        },
    }
}
