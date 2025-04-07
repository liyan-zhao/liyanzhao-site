$(window).on('load resize', function () {
  for (let i = 1; i <= 19; i++) {
    setupSlider(i);
  }
});

function setupSlider(index) {
  const sliderId = `#slider_images${index}`;
  const countId = `#count${index}`;
  const $slider = $(sliderId);

  // Remove cloned images and reset state
  $slider.find('.cloned').remove();
  $slider.css('left', ''); // Reset position

  const $images = $slider.find('img').not('.cloned');
  const imgCount = $images.length;
  const imgWidth = $images.first().outerWidth(true);

  // Set total width of the slider container
  $slider.width(imgWidth * (imgCount + 2));

  // Clone for looping effect
  const $firstClone = $images.first().clone().addClass('cloned');
  const $lastClone = $images.last().clone().addClass('cloned');

  $slider.append($firstClone);
  $slider.prepend($lastClone);

  // Position slider to show first real image
  $slider.css('left', -imgWidth + 'px');

  // Store current index (1-based)
  $slider.data('currentIndex', 1);
  $slider.data('imgWidth', imgWidth);
  $slider.data('imgCount', imgCount);

  $(countId).text(`1/${imgCount}`);

  // Bind click handlers once
  if (!$slider.data('handlersAttached')) {
    attachSliderControls(index);
    $slider.data('handlersAttached', true);
  }
}

function attachSliderControls(index) {
  const sliderId = `#slider_images${index}`;
  const countId = `#count${index}`;
  const $slider = $(sliderId);

  $(`#right${index}`).off('click').on('click', function () {
    let current = $slider.data('currentIndex');
    const imgWidth = $slider.data('imgWidth');
    const imgCount = $slider.data('imgCount');

    current++;
    $slider.animate({ left: -current * imgWidth + 'px' }, function () {
      if (current > imgCount) {
        $slider.css('left', -imgWidth + 'px');
        current = 1;
      }
      $slider.data('currentIndex', current);
      $(countId).text(`${current}/${imgCount}`);
    });

    return false;
  });

  $(`#left${index}`).off('click').on('click', function () {
    let current = $slider.data('currentIndex');
    const imgWidth = $slider.data('imgWidth');
    const imgCount = $slider.data('imgCount');

    current--;
    $slider.animate({ left: -current * imgWidth + 'px' }, function () {
      if (current < 1) {
        $slider.css('left', -imgCount * imgWidth + 'px');
        current = imgCount;
      }
      $slider.data('currentIndex', current);
      $(countId).text(`${current}/${imgCount}`);
    });

    return false;
  });
}
