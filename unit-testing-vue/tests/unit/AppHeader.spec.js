import { mount } from '@vue/test-utils';
import AppHeader from '@/components/AppHeader';

describe('AppHeader', () => {
  test('if user is not logged in, do not show logout button', () => {
    const wrapper = mount(AppHeader);
    expect(wrapper.find('button').isVisible()).toBe(false);
  });

  test('if logged in, show logout button', () => {
    const wrapper = mount(AppHeader);
    wrapper.setData({ loggedIn: true }); // setting our data value
    expect(wrapper.find('button').isVisible()).toBe(true);
  });
});
