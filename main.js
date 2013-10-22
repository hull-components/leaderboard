Hull.component('leaderboard', {
  templates: ['leaderboard'],
  requiredOptions: ['id', 'board'],
  datasources: {
    leaders: ':id/leaderboards/:board'
  }
});
