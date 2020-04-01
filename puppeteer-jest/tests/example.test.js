import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import FeedbackPage from '../pages/FeedbackPage';
import TopBar from '../pages/components/TopBar';

describe('Example', () => {
  let homepage;
  let topBar;
  let loginPage;
  let feedbackPage;

  beforeAll(async () => {
    jest.setTimeout(15000);
    homepage = new HomePage();
    topBar = new TopBar();
    loginPage = new LoginPage();
    feedbackPage = new FeedbackPage();
  });

  it('home page should work', async () => {
    await homepage.visit();
  });

  it('navbar should be displayed', async () => {
    await homepage.isNavBarDisplayed();
    await topBar.isTopBarDisplayed();
  });

  it('Try to login', async () => {
    await loginPage.isLoginFormDisplayed();
    await loginPage.login('username', 'password');
  });

  it('Feedback page', async () => {
    await feedbackPage.visit();
    await feedbackPage.isFeedbackformDisplayed();
    await feedbackPage.submitFeedback(
      'Test',
      'test@gmail.com',
      'subject',
      'comment'
    );
  });
});
