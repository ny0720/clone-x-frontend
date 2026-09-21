const lines = 5;

for (let i=1; i<=lines; i++){
    let result = '';

    for (let j = 1; j<=lines-i; j++) {
        result += ' ';
    }

    for (let k=1; k<=2*i-1; k++){
        result += '*';
    }

    console.log(result);
}

// 정석
for (let i = 1; i <= 5; i++) {
    for (let b = 1; b <= 5 - i; b++) {
        process.stdout.write(" ");
    }
    for (let a = 1; a <= 2 * i - 1; a++) {
        process.stdout.write("*");
    }
    console.log(); // 줄 바꿈
}