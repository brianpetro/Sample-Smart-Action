# Smart Actions
## components
- Input/output structures (required)
- System prompt/OpenAPI (required)
- test-cases (recommended)
- README/Human instructions for use (recommended)
##### `exports.func` or `exports.your_smart_action` (required)
- *must export `func` or a function with the same name as the file*
##### input
- `env`
	- provides access to the main "SmartEnv"
- `params{}`
	- based on the incoming API request
		- `GET` requests use URL parameters
		- `POST` and other methods use `requestBody{}` 
	- always includes `action` instance
		- easy access to action-specific `settings` getter
##### output
- should return an object or array
	- typically an object
	- array, string and number work, too, but handling may vary based on the AI
- output is what is provided to the AI
##### OpenAPI location precedence
- `your_smart_action.yaml`
- `your_smart_action.json`
- `your_smart_action.js`
	- `exports.openapi`
	- JS Docs
##### endpoint precedence
- OpenAPI endpoint may override core/default endpoint if it is disabled
	- otherwise includes `GROUP/` prefix in endpoint path if core/default is enabled
##### `exports.settings` (optional)
- settings required by the action can be declared in `exports.settings{}`
	- uses `{name: type}` format
		- ex. `{api_key: "string"}`
- Smart Connect renders a form input for each setting

##### handling dependencies
- core-actions
	- built-in dependencies only
- custom actions
	- can use NPM packages installed globally
- community actions
	- NPM packages must be bundled

##### error handling
- Smart Connect catches unhandled errors in actions and returns contents to the GPT