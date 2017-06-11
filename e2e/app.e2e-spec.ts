import { ChatBotPage } from './app.po';

describe('chat-bot App', () => {
  let page: ChatBotPage;

  beforeEach(() => {
    page = new ChatBotPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
