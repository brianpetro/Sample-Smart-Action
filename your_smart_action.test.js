const { env } = require('./test_env');
const { your_smart_action } = require('./your_smart_action');
const params = {
  action: {
    settings: {
      CUSTOM_SETTING: env.config.actions.your_smart_action.CUSTOM_SETTING
    }
  }
};
(async () => {
  try{ 
    const result = await your_smart_action(env, params);
    if(result.action_response !== 'TEST_VALUE') throw new Error('Expected result to be TEST_VALUE');
    console.log('Test passed');
  } catch (e) {
    console.error(e);
  }
})();