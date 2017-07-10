import _ from 'lodash';

const possibleMessages = {
  anger: `Don't be so angry

  ಠ_ಠ`,
  happiness: `Well Done, Nice smile!

  (◕‿◕✿)`,
  surprise: `uOOOOOOOOOOOOO

  (╯°□°)`,
};

export function calculateScore(happiness) {
  return parseInt(Number(happiness) * 1000);
}

export function getHappiness({ scores }) {
  return scores.happiness;
}

export function getSelfieMessage({ scores }) {
  const expression = _.reduce(
    scores,
    (resExpression, value, expression) => {
      if (resExpression[1] < value) {
        resExpression = [expression, value];
      }
      return resExpression;
    },
    ['none', 0]
  )[0];

  return (
    possibleMessages[expression] ||
    `You can do it better,
come on !


༼ つ ◕_◕ ༽つ`
  );
}
