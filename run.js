const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


const createMatrix = (n) => {
    const matrix = [];
    let digit = 1;

    for (let i =0; i < n; i++) {
        let stringOfMatrix = [];
        for (let j = 0; j < n; j++) {
            stringOfMatrix[j] = digit;
            digit++;
        }
        matrix[i] = stringOfMatrix;
    }

    return matrix;
};

const getSpiralStringByMatrix =  (matrix) => {
    let spiralArray = [];
    const n = matrix.length;
    let i = n - (n-1)/2 - 1; // вертикаль
    let j = n - (n-1)/2 - 1; //горизонталь

    spiralArray.push(matrix[i][j]);

    let k =1;
    while (k != n) {
        for (let y = 0; y < k; y++) {
            j = j - 1;
            spiralArray.push(matrix[i][j]);
        }

        for (let y = 0; y < k; y++) {
            i = i + 1;
            spiralArray.push(matrix[i][j]);
        }

        k++;

        for (let y = 0; y < k; y++) {
            j = j + 1;
            spiralArray.push(matrix[i][j]);
        }

        for (let y = 0; y < k; y++) {
            i = i - 1;
            spiralArray.push(matrix[i][j]);
        }

        if (i === 0) {
            for (let y = 0; y < k ; y++) {
                j = j - 1;
                spiralArray.push(matrix[i][j]);
            }
        }

        k++;
    }

    return spiralArray.join(', ');
};

const askQuestionRecursively = () => {
    rl.question('n? ', (n) => {
        try {
            if (parseInt(n) % 2 === 0) {
                console.log('n must be odd positive number');
            } else {
                const matrix = createMatrix(parseInt(n));
                const spiralString = getSpiralStringByMatrix(matrix);
                console.log(spiralString);
            }
        } catch (err) {
            console.log('n must be odd positive number');
        }
        askQuestionRecursively();
    });
};

askQuestionRecursively();

