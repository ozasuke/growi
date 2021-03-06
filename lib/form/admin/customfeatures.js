'use strict';

var form = require('express-form')
  , field = form.field;

module.exports = form(
  field('settingForm[customize:isEnabledTimeline]').trim().toBooleanStrict(),
  field('settingForm[customize:isSavedStatesOfTabChanges]').trim().toBooleanStrict()
);

