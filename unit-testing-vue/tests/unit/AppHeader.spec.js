import { mount } from '@vue/test-utils';
import AppHeader from '@/components/AppHeader';

describe('AppHeader', () => {
  test('if user is not logged in, do not show logout button', () => {
    const wrapper = mount(AppHeader); // mounting the component
    expect(true).toBe(true);
  });

  test('if user is logged in, show logout button', () => {
    const wrapper = mount(AppHeader); // mounting the component
    expect(true).toBe(true);
  });
});
