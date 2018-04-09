function theBeatlesPlay(musicians, instruments) {
  return musicians.map((el,i,arr) => `${el} plays ${instruments[i]}`);
}
