document.addEventListener('DOMContentLoaded', function() {
    const boyNameInput = document.getElementById('boyName');
    const girlNameInput = document.getElementById('girlName');
    const loveLevelInput = document.getElementById('loveLevel');
    const lovePercentage = document.getElementById('lovePercentage');
    const findMatchBtn = document.getElementById('findMatchBtn');
    const matchResult = document.getElementById('matchResult');

    loveLevelInput.addEventListener('input', function() {
        lovePercentage.textContent = loveLevelInput.value + '%';
    });

    findMatchBtn.addEventListener('click', function() {
        const boyName = boyNameInput.value.trim();
        const girlName = girlNameInput.value.trim();
        const loveLevel = parseInt(loveLevelInput.value);
        let matchText = '';

        if (boyName === '' || girlName === '') {
            matchText = 'Please enter both names.';
        } else {
            if (loveLevel >= 80) {
                matchText = `${boyName} and ${girlName} are soulmates!`;
            } else if (loveLevel >= 50) {
                matchText = `${boyName} and ${girlName} are compatible!`;
            } else {
                matchText = `${boyName} and ${girlName}, keep searching, your match is out there!`;
            }
        }

        matchResult.textContent = matchText;
    });
});
