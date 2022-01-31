const input = 7,
    length = input * 2 - 1;
for (let i = 1; i <= input; i++) {
    const star = i * 2 - 1,
        space = (length - star) / 2;
    console.log(' '.repeat(space) + '*'.repeat(star));

    // let line = '';
    // for (let j = 0; j < star + space; j++) {
    //     if (j < space)
    //         line += ' ';
    //     else
    //         line += '#';
    // }
    // console.log(line);
}
