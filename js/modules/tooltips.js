function toolTipes(item) {

  item.tooltipster({
    theme: 'tooltipster-light',
    delay: 50,
    repositionOnScroll: true,
    minWidth: 265,
    maxWidth: 265,
    arrow: false,
    trackTooltip: true,
    side: ['bottom', 'top', 'right', 'left']
  });

}

module.exports = toolTipes;