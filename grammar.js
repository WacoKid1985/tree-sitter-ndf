module.exports = grammar({
  name: 'ndf',
  rules: {
    source_file: $ => repeat($.descriptor),
    descriptor: $ => seq(
      field('name', $.identifier),
      '(',
      optional($.parameter_list),
      ')'
    ),
    parameter_list: $ => repeat($.parameter),
    parameter: $ => seq(
      field('name', $.identifier),
      '=',
      field('value', $.value)
    ),
    identifier: $ => /[a-zA-Z_][a-zA-Z0-9_]*/,
    value: $ => /[^,)]+/
  }
});
