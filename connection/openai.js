const { Configuration, OpenAIApi } = require("openai");

const { OPEN_AI_API_KEY } = require("../config");

const configuration = new Configuration({
  apiKey: "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",
});

const openAI = new OpenAIApi(configuration);

module.exports = openAI;
