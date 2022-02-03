const ActionSort = (activeMatch) => {
  const goals = activeMatch.goalscorer;
  const cards = activeMatch.cards;
  const sub = activeMatch.substitutions;

  let away = [];
  let home = [];
  if (activeMatch !== 0) {
    away = sub.away;
    for (let i = 0; i < away.length; i++) {
      away[i].where = "away";
      away[i].what = "sub";
    }
    home = sub.home;
    for (let i = 0; i < home.length; i++) {
      home[i].where = "home";
      home[i].what = "sub";
    }
    for (let i = 0; i < goals.length; i++) {
      if (goals[i].home_scorer === "") {
        goals[i].where = "away";
      } else {
        goals[i].where = "home";
      }
      goals[i].what = "goal";
    }
    for (let i = 0; i < cards.length; i++) {
      if (cards[i].home_fault === "") {
        cards[i].where = "away";
      } else {
        cards[i].where = "home";
      }
      cards[i].what = "card";
    }
  }

  const array = [];
  array.push(goals);
  array.push(cards);
  array.push(away);
  array.push(home);

  let actions = [].concat.apply([], array);

  actions.sort((a, b) => {
    const A = a.time.substring(0, 2);
    const B = b.time.substring(0, 2);

    return A - B;
  });
  return actions;
};
export default ActionSort;
