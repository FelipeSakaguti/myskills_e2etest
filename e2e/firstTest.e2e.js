describe('Test Suit', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    await expect(element(by.id('welcome'))).toBeVisible();
  });

  it('check register of new skill', async () => {
    const inputNewSkill = await element(by.id('input-new'));
    const buttonAddSkill = await element(by.id('button-add'));
    const flatlistSkills = await element(by.id('flatlist-skills'));

    await inputNewSkill.tap();
    await inputNewSkill.typexText('React Native');

    await flatlistSkills.tap();

    await buttonAddSkill.tap();

    expect(element(by.id('flatlist-skills'))).toBeVisible();

  });
});
