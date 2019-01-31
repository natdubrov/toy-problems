function whatday(number) {
  if (number >=1 && number <=7 && Number.isInteger(number)) {
    const weekdays=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    return weekdays[number -1];
  } else {
    return 'Wrong, please enter a number between 1 and 7';
  }
}
