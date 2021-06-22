let gradeCalc = function (studentScore, totalScore = 20) {
    let finalScore = (studentScore / totalScore) * 100;

        if  (finalScore > 90) {
            return `You scored a ${ finalScore }. That is an A!`
        } else if (finalScore >=80 && finalScore < 90) {
            return `You scored a ${ finalScore }. That is a B!`
        } else if (finalScore > 70 && finalScore < 80) {
            return `You scored a ${ finalScore }. That is a C.`
        } else if (finalScore > 60 && finalScore < 70) {
            return `You scored a ${ finalScore }. That is a D.`
        } else if (finalScore > 50 && finalScore < 60) {
            return `You scored a ${ finalScore }. That is an F.`
        } else {
            return 'Your score is lower than 55.'
    }    
} 
    
console.log(gradeCalc());