const rates = {
    usd: 0.014,
    eur: 0.013
};

function convert({rub, currency}) {
    if (!(currency in rates)) {
        return null;
    }

    return rub * rates[currency];
}