Hull.component({
  templates: ['leaderboard'],
  requiredOptions: ['id', 'board'],
  datasources: {
    leaders: ':id/leaderboards/:board'
  }
});
