function titleCaseEdit(title) {
  // Insert code here;
  let ARR = title.toLowerCase().split(' ');

    for (let i = 0; i < ARR.length; i++) {
        ARR[i] = ARR[i].charAt(0).toUpperCase() + ARR[i].substring(1);

    }
    let titleBack = ARR.join(' ');
    return titleBack;
}

// Do not edit this line;
module.exports = titleCaseEdit;