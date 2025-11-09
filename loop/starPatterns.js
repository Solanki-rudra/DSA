const pattern1 = (n) => {
    for (let i = 1; i <= n; i++) {
        let row = '';
        for (let j = 1; j <= n; j++) {
            row += '* ';
        }
        console.log(row);
    }
}

const pattern2 = (n) => {
    for (let i = 1; i <= n; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += '* ';
        }
        console.log(row);
    }
}

const pattern3 = (n) => {
    for (let i = 1; i <= n; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += j + ' ';
        }
        console.log(row);
    }
}

const pattern4 = (n) => {
    for (let i = 1; i <= n; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += i + ' ';
        }
        console.log(row);
    }
}

const pattern5 = (n) => {
    for (let i = 1; i <= n; i++) {
        let row = '';
        for (let j = 1; j <= n - i + 1; j++) {
            row += '* ';
        }
        console.log(row);
    }
}

const pattern6 = (n) => {
    for (let i = 1; i <= n; i++) {
        let row = '';
        for (let j = 1; j <= n - i + 1; j++) {
            row += j + ' ';
        }
        console.log(row);
    }
}

const pattern7 = (n) => {
    for (let i = 1; i <= n; i++) {
        let row = '';
        for (let j = 1; j <= n - i; j++) {
            row += '  ';
        }
        for (let k = 1; k <= (2 * i) - 1; k++) {
            row += '* ';
        }
        console.log(row);
    }
}

const pattern8 = (n) => {
    for (let i = 1; i <= n; i++) {
        let row = '';
        for (let j = 1; j <= i - 1; j++) {
            row += '  ';
        }
        for (let k = 1; k <= 2 * n - 2 * i + 1; k++) {
            row += '* ';
        }
        console.log(row);
    }
}

const pattern9 = (n) => {
    for (let i = 1; i <= n; i++) {
        let row = '';
        for (let j = 1; j <= n - i; j++) {
            row += '  ';
        }
        for (let k = 1; k <= (2 * i) - 1; k++) {
            row += '* ';
        }
        console.log(row);
    }
    for (let i = n; i >= 1; i--) {
        let row = '';
        for (let j = 1; j <= n - i; j++) {
            row += '  ';
        }
        for (let k = 1; k <= (2 * i) - 1; k++) {
            row += '* ';
        }
        console.log(row);
    }
}

const pattern10 = (n) => {
    for (let i = 1; i <= 2 * n - 1; i++) {
        let row = '';
        let end = i;
        if (i > n) end = 2 * n - i;
        for (let j = 1; j <= end; j++) {
            row += '* ';
        }
        console.log(row);
    }
}

const pattern11 = (n) => {
    for (let i = 1; i <= n; i++) {
        let row = '';
        let print;
        if (i % 2 === 0) print = '0'
        else print = '1';
        for (let j = 1; j <= i; j++) {
            row += print + ' ';
            print = 1 - print;
        }
        console.log(row);
    }
}

const pattern12 = (n) => {
    for (let i = 1; i <= n; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += j + ' ';
        }
        for (let k = 1; k <= (n - i) * 2; k++) {
            row += '  ';
        }
        for (let l = i; l >= 1; l--) {
            row += l + ' ';
        }
        console.log(row);
    }
}

const pattern13 = (n) => {
    let num = 1
    for (let i = 1; i <= n; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += num + ' ';
            num++;
        }
        console.log(row);
    }
}

const pattern14 = (n) => {
    for (let i = 0; i < n; i++) {
        let row = '';
        for (let j = 65; j <= 65 + i; j++) {
            row += String.fromCharCode(j) + ' ';
        }
        console.log(row);
    }
}

const pattern15 = (n) => {
    for (let i = 1; i <= n; i++) {
        let row = '';
        for (let j = i; j <= n; j++) {
            row += '* ';
        }
        for (let k = 1; k <= (2 * i) - 2; k++) {
            row += '  ';
        }
        for (let l = i; l <= n; l++) {
            row += '* ';
        }
        console.log(row);
    }
    for (let i = 1; i <= n; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += '* ';
        }
        for (let k = 1; k <= 2 * (n - i); k++) {
            row += '  ';
        }
        for (let l = 1; l <= i; l++) {
            row += '* ';
        }
        console.log(row);
    }
}

const pattern16 = (n) => {
    for (let i = 1; i <= 2 * n - 1; i++) {
        let row = '';
        let end = i;
        if (i > n) end = 2 * n - i;
        for (let j = 1; j <= end; j++) {
            row += '* ';
        }
        for (let k = 1; k <= (n - end) * 2; k++) {
            row += '  ';
        }
        for (let l = 1; l <= end; l++) {
            row += '* ';
        }
        console.log(row);
    }
}

const pattern17 = (n) => {
    for (let i = 1; i <= n; i++) {
        let row = '';
        for (let j = 1; j <= n; j++) {
            if (j === 1 || j === n || i === 1 || i === n) {
                row += "* "
            } else {
                row += "  "
            }
        }
        console.log(row);
    }
}

const pattern18 = (n) => {
    let last = 2*n - 2;
    for (let i = 0; i <= last; i++) {
        let row = '';
        for (let j = 0; j <= last; j++) {
            let top = i;
            let left = j;
            let bottom = last - i;
            let right = last - j;
            let min = Math.min(Math.min(top, bottom), Math.min(left, right));
            row += (n - min) + ' ';
        }
        console.log(row);
    }
}

pattern1(5);
pattern2(5);
pattern3(5);
pattern4(5);
pattern5(5);
pattern6(5);
pattern7(5);
pattern8(5);
pattern9(5);
pattern10(5);
pattern11(5);
pattern12(5);
pattern13(5);
pattern14(5);
pattern15(5);
pattern16(5);
pattern17(5);
pattern18(5);