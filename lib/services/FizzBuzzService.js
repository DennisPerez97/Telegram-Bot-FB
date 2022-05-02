class FizzBuzzService{
    static applyValidationInExplorer(explorer){
        let score = explorer.score;
        if(!isNaN(score)){
            score = Number(score);
            if(score%3 === 0 && score%5 === 0){
                explorer.trick = "FIZZBUZZ";
            }else if(score%3 === 0){
                explorer.trick = "FIZZ";
            }else if(score%5 === 0){
                explorer.trick = "BUZZ";
            }else
            {
                explorer.trick = score;
            }
        }
        return explorer;

    }
}

module.exports = FizzBuzzService;