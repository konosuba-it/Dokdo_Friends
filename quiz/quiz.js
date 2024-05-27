function checkAnswers() {
    var answers = ["독도", "강치", "1905", "리앙쿠르 암초", "메탄하이드레이트"];
    var correctCount = 0;

    for (var i = 0; i < answers.length; i++) {
        if (document.getElementById("print" + (i + 1)).value === answers[i]) {
            correctCount++;
        } else {
            alert((i + 1) + "번째 문항부터 오답이 있습니다.");
            return;
        }
    }

    if (correctCount === 5) {
        alert("열심히 공부했군요? 모두 다 맞혔습니다! 대단합니다!");
        window.open('../wow/index.html');
    }
}
