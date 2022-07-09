window.addEventListener('DOMContentLoaded', () => {
  const tab01 = document.querySelector('.tab01');
  const tab02 = document.querySelector('.tab02');
  if (tab01) {
    const tabInHome01 = new Tab({
      trigger: '.js-tab01_trigger',
      parent: '.tab01',
      target: '.tab01_content'
    });
  }

  if (tab02) {
    const tabInAbout = new Tab({
      trigger: '.js-tab02_trigger',
      parent: '.tab02',
      target: '.tab02_content'
    });
  }
});

class Tab {
  constructor(obj) {
    const { trigger, parent, target } = obj;
    this.$triggers = document.querySelectorAll(trigger);
    this.$parent = document.querySelector(parent);
    this.$targets = this.$parent.querySelectorAll(target);

    this.$triggers.forEach($trigger => {
      $trigger.addEventListener('click', (e) => this.tabSwitch(e));
    });
  }

  tabSwitch(e) {
    const indexVal = e.target.dataset.index;

    this.$targets.forEach($target => {
      $target.classList.remove('is-show');
    })
    this.$targets[indexVal - 1].classList.add('is-show');
  }
}