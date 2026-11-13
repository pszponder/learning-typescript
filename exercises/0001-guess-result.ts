type GuessResult = "too-low" | "correct" | "too-high";

function judgeGuess(guess: number, secret: number): GuessResult {
    if (guess > secret) {
        return "too-high"
    } else if (guess < secret) {
        return "too-low"
    }
    return "correct"
}

console.log(judgeGuess(3, 7)); // expected: "too-low"
console.log(judgeGuess(7, 7)); // expected: "correct"
console.log(judgeGuess(9, 7)); // expected: "too-high"