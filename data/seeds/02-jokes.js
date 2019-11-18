exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('jokes')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('jokes').insert([
        {
          joke:
            'Today, my son asked "Can I have a book mark?" and I burst into tears.',
          punchline: "11 years old and he still doesn't know my name is Brian",
          created_by: 1,
        },
        {
          joke:
            'My wife is really mad at the fact that I have no sense of direction.',
          punchline: 'So I packed up my stuff and right.',
          created_by: 2,
        },
        {
          joke: 'How do you make holy water?',
          punchline: 'You boil the hell out of it.',
          created_by: 1,
        },
        {
          joke: 'I bought some shoes from a drug dealer.',
          punchline:
            "I don't know what he laced them with, but I was tripping all day!",
          created_by: 3,
        },
        {
          joke: "Did you know the first French fries weren't cooked in France?",
          punchline: 'They were cooked in Greece.',
          created_by: 1,
        },
      ]);
    });
};
