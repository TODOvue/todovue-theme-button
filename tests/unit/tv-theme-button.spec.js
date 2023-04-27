import { shallowMount } from "@vue/test-utils";
import TvThemeButton from "@/component/TvThemeButton.vue";

describe("TvThemeButton", () => {
  test("renders correctly", () => {
    const wrapper = shallowMount(TvThemeButton);
    expect(wrapper.html()).toMatchSnapshot();
  });

  test("Change theme correctly", () => {
    const wrapper = shallowMount(TvThemeButton);
    const switchButton = wrapper.find(".tv-theme-switch");

    expect(wrapper.vm.theme).toBe("dark");

    switchButton.trigger("click");

    expect(wrapper.vm.theme).toBe("light");

    switchButton.trigger("click");

    expect(wrapper.vm.theme).toBe("dark");
  });

  test("Check if the theme has been saved in the localStorage", () => {
    const wrapper = shallowMount(TvThemeButton);
    const switchButton = wrapper.find(".tv-theme-switch");

    switchButton.trigger("click");

    expect(localStorage.getItem("theme")).toBe("light");
  });

  test('Check if the "change-theme" event has been emitted correctly', () => {
    const wrapper = shallowMount(TvThemeButton);
    const switchButton = wrapper.find(".tv-theme-switch");

    switchButton.trigger("click");

    expect(wrapper.emitted()["change-theme"]).toBeTruthy();
    expect(wrapper.emitted()["change-theme"][0][0]).toBe("dark");
  });
});
