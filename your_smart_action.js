async function your_smart_action(env, params) {
  return {
    action_response: params.action.settings.CUSTOM_SETTING
  };
}
exports.your_smart_action = your_smart_action;
exports.openapi = {
  "openapi": "3.1.0",
  "info": {
    "title": "Your Smart Action",
    "version": "1.0.0"
  },
  "servers": [
    {
      "url": "UNUSED"
    }
  ],
  "paths": {
    "/your-smart-action": {
      "get": {
        "operationId": "your_smart_action",
        "summary": "Your Smart Action",
        "description": "Your Smart Action Description",
        "responses": {
          "200": {
            "description": "Your Smart Action Response",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "action_response": {
                      "type": "string",
                      "description": "Your Smart Action Response"
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};
exports.settings = {
  CUSTOM_SETTING: 'string'
};