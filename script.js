const sequences = [
  { folder: '01', frameCount: 100, title: 'WORK<br>SAMPLE', 
    projTitle: 'Film Work Samples', projDate: '2019&mdash;2025',
    text: "A mix of exhibited works and works in progress, this compilation showcases my camera, sound, and editing sensibilities. In my film work, I approach each project with a spirit of experimentation, seeking out new forms and structures that booster each story.",
    vimeoId: '1070697754?h=a6344b3634', imgPresence: 'none', imgOpac: '1'},
  { folder: '02', frameCount: 140, title: 'ROSIE&apos;S<br>SONG', 
    projTitle: 'Rosie&apos;s Song', projDate: '2025, video',
    text: "A robin, a blind dog, a woman, her two grandchildren, guinea pigs, and doves share a home in the country. Following perspectival threads that weave in and out of each other, a cacophonous portrait of life together emerges.",
    vimeoId: '941357815?h=4badf5007a', imgPresence: 'none', imgOpac: '1'},
  { folder: '03', frameCount: 147, title: 'THE QUESTION<br>OF GRIEF', 
    projTitle: 'The Question of Grief', projDate: '2024, video performance',
    text: "Can grief be generous? Is it inherently self-pitying? Can it strike you down? Can it treat you well? Is it possible to change the past? Do you get a choice? Can you mourn an ineffable loss? Can you anticipate a place that can’t be known until you reach it? Who is changed and who is dead?<br><br>This performance begins as a desktop lecture exploring different facets of grief before exploding out into a light-sound-olfactory ritual space that asks us to sit together with loss in an embodied way. An assemblage of found and original image and audio blends references from history, science, folk traditions, and mythology along with diaristic accounts of my own encounters with grief.<br><br>Exhibited at the 602 Club, Underscore Gallery, HF Johnson Gallery, and Onion City Experimental Film Festival.",
    vimeoId: '918546679?h=f8fd9c243b', imgPresence: 'flex', imgOpac: '1',
    projPhoto1: 'images/scroll/03/1.gif', projPhotoSize1: '1',  
    projPhoto2: 'images/scroll/03/2.gif', projPhotoSize2: '1',  
    projPhoto3: 'images/scroll/03/3.webp', projPhotoSize3: '2', imgPresence3: 'block',
    projPhoto4: '', projPhotoSize4: '', imgPresence4: 'none',
    projPhoto5: '', projPhotoSize5: '', imgPresence5: 'none',
    projPhoto6: '', projPhotoSize6: '', imgPresence6: 'none',
    projPhoto7: '', projPhotoSize7: '', imgPresence7: 'none',
    projPhoto8: '', projPhotoSize8: '', imgPresence8: 'none',},
  { folder: '04', frameCount: 105, title: 'A FEW ATTEMPTS<br>TO UNDERSTAND<br>THE SKY', 
    projTitle: 'A Few Attempts to Understand the Sky', projDate: '2023, video',
    text: "The film weaves together a history of sky auguries, meteorological forecasting technologies, extreme weather events, ghosts of extinction, and signs of speciary adaptation. These stories are interspersed with participatory interludes in a constellation united by two overarching concerns: the problem of representation when it comes to climate change—how can we understand and feel climate change in a sustained and embodied way?—and questions around how we can best live together with other species under ecological precarity. The interludes include both filmed and live exercises that engage the audience's voices and body movements in attempts to become bird and sense weather phenomena in our own bodies. The film is a collaborative, pedagogical experiment in attention and collectivity, asking us to acknowledge our shared implication in a climate reality filled with both grief and wonder, and, together, to imagine richer futures for our world.<br><br>Screened at Film Diary NYC and Winnipeg Underground Film Festival",
    vimeoId: '879264204?h=901391ce3f', imgPresence: 'flex', imgOpac: '1',
    projPhoto1: 'images/scroll/04/1.gif', projPhotoSize1: '1a',  
    projPhoto2: 'images/scroll/04/2.gif', projPhotoSize2: '3',
    projPhoto3: '', projPhotoSize3: '', imgPresence3: 'none',
    projPhoto4: '', projPhotoSize4: '', imgPresence4: 'none',
    projPhoto5: '', projPhotoSize5: '', imgPresence5: 'none',
    projPhoto6: '', projPhotoSize6: '', imgPresence6: 'none',
    projPhoto7: '', projPhotoSize7: '', imgPresence7: 'none',
    projPhoto8: '', projPhotoSize8: '', imgPresence8: 'none',},
  { folder: '05', frameCount: 150, title: 'WEATHER<br>DIARY', 
    projTitle: 'Weather Diary', projDate: '2023, website',
    text: "I spent two years collecting weather observations&mdash;daily polaroids of the sky, personal notes, extreme weather news alerts, local birding listserv updates, photos and videos sent by friends. To help archive and organize this growing collection, I built a website that allowed the media to be accessed and configured in relation to one another, fostering moments of formal and conceptual serendipity. These materials would later become the building blocks for my short film 'A Few Attempts to Understand the Sky.'",
    vimeoId: '1069808134?h=b9bc301ed5', imgPresence: 'none', imgOpac: '.5',},
  { folder: '06', frameCount: 53, title: 'VERIZON<br>DEVICE<br>SHOWCASE', 
    projTitle: 'Verizon Retail Device Showcase Design', projDate: '2020&mdash;2022, digital',
    text: "As a designer on Verizon's Creative Marketing Group retail design team, I worked on short videos, UX interfaces, and typographic animations that lived on devices in stores across the nation.",
    vimeoId: '1068725189?h=bc27bec48f', imgPresence: 'flex', imgOpac: '1',
    projPhoto1: 'images/scroll/06/5.gif', projPhotoSize1: '4',  
    projPhoto2: 'images/scroll/06/1.webp', projPhotoSize2: '4',
    projPhoto3: 'images/scroll/06/2.webp', projPhotoSize3: '4', imgPresence3: 'block',
    projPhoto4: 'images/scroll/06/3.webp', projPhotoSize4: '4', imgPresence4: 'block',
    projPhoto5: 'images/scroll/06/4.webp', projPhotoSize5: '4', imgPresence5: 'block',
    projPhoto6: '', projPhotoSize6: '', imgPresence6: 'none',
    projPhoto7: '', projPhotoSize7: '', imgPresence7: 'none',
    projPhoto8: '', projPhotoSize8: '', imgPresence8: 'none',},
  // Add more sequences as needed...
];

const scrollContainer = document.getElementById('scrollSections');
const allSequences = [];

// Create DOM structure and initialize sequence objects
sequences.forEach((seq, i) => {
  const seqId = `sequence${i + 1}`;
  const canvasId = `canvas${i + 1}`;
  const textId = `text${i + 1}`;

  const vimeoEmbed = seq.vimeoId
    ? `<div class="vimeo-wrapper">
         <iframe src="https://player.vimeo.com/video/${seq.vimeoId}&title=0&byline=0&portrait=0" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
       </div>`
    : '';

  scrollContainer.insertAdjacentHTML('beforeend', `
    <div class="scroll-container" id="${seqId}" data-index="${i}">
      <div id="${seq.folder}"></div>
      <div class="canvas-container">
        <canvas id="${canvasId}" style="opacity: ${seq.imgOpac};"></canvas>
        <div class="canvas-title">${seq.title}</div>
      </div>
      <div class="spacer"></div>
    </div>
    <div class="text-section" id="${textId}">
      ${vimeoEmbed}
      <div id="picture-container" style="display: ${seq.imgPresence};">
        <div class="picture-item${seq.projPhotoSize1}">
          <img src="${seq.projPhoto1}">
        </div>
        <div class="picture-item${seq.projPhotoSize2}">
          <img src="${seq.projPhoto2}">
        </div>
        <div class="picture-item${seq.projPhotoSize3}" style="display: ${seq.imgPresence3};">
          <img src="${seq.projPhoto3}">
        </div>
        <div class="picture-item${seq.projPhotoSize4}" style="display: ${seq.imgPresence4};">
          <img src="${seq.projPhoto4}">
        </div>
        <div class="picture-item${seq.projPhotoSize5}" style="display: ${seq.imgPresence5};">
          <img src="${seq.projPhoto5}">
        </div>
        <div class="picture-item${seq.projPhotoSize6}" style="display: ${seq.imgPresence6};">
          <img src="${seq.projPhoto6}">
        </div>
        <div class="picture-item${seq.projPhotoSize7}" style="display: ${seq.imgPresence7};">
          <img src="${seq.projPhoto7}">
        </div>
        <div class="picture-item${seq.projPhotoSize8}" style="display: ${seq.imgPresence8};">
          <img src="${seq.projPhoto8}">
        </div>
      </div>
      <div class="description">
        <div class="semibolditalic">${seq.projTitle}</div>
        <div class="italic">${seq.projDate}</div>
      <div class="linespace"><br></div>
        <div class="light">${seq.text || ''}</div>
      </div>
    </div>
  `);

  const canvas = document.getElementById(canvasId);
  const context = canvas.getContext('2d');

  allSequences.push({
    canvas,
    context,
    folder: seq.folder,
    frameCount: seq.frameCount,
    images: [],
    loaded: false,
    index: i,
  });
});

// Resize canvases to fill screen
function resizeAll() {
  allSequences.forEach(({ canvas }) => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
}
window.addEventListener('resize', resizeAll);
resizeAll();

// Draw image centered and covering canvas
function drawCoverImage(canvas, context, image) {
  context.clearRect(0, 0, canvas.width, canvas.height);

  const canvasRatio = canvas.width / canvas.height;
  const imgRatio = image.width / image.height;
  let drawWidth, drawHeight;

  if (imgRatio > canvasRatio) {
    drawHeight = canvas.height;
    drawWidth = image.width * (canvas.height / image.height);
  } else {
    drawWidth = canvas.width;
    drawHeight = image.height * (canvas.width / image.width);
  }

  const x = (canvas.width - drawWidth) / 2;
  const y = (canvas.height - drawHeight) / 2;

  context.drawImage(image, x, y, drawWidth, drawHeight);
}

// Lazy-load image sequences
function loadSequenceImages(seq) {
  const { folder, frameCount } = seq;

  for (let i = 1; i <= frameCount; i++) {
    const img = new Image();
    img.src = `frames/${folder}/${String(i).padStart(5, '0')}.webp`;
    seq.images.push(img);

    // Draw first frame immediately after it's loaded
    if (i === 1) {
      img.onload = () => drawCoverImage(seq.canvas, seq.context, img);
    }
  }

  seq.loaded = true;
}

// Observe when a scroll-container is near viewport
const observerOptions = {
  root: null,
  rootMargin: '300px',
  threshold: 0.01,
};

const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const index = Number(entry.target.dataset.index);
      const sequence = allSequences[index];
      if (!sequence.loaded) {
        loadSequenceImages(sequence);
      }
      obs.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe each canvas sequence section
allSequences.forEach((_, i) => {
  const container = document.getElementById(`sequence${i + 1}`);
  observer.observe(container);
});

// Scroll animation handler
function onScroll() {
  allSequences.forEach(({ canvas, context, images, loaded }, i) => {
    if (!loaded || images.length === 0) return;

    const container = document.getElementById(`sequence${i + 1}`);
    const title = container.querySelector('.canvas-title');
    const top = container.offsetTop;
    const height = container.offsetHeight;
    const scrollWithin = window.scrollY - top;
    const maxScroll = height - window.innerHeight;

    const scrollFraction = Math.min(Math.max(scrollWithin / maxScroll, 0), 1);
    const frameIndex = Math.min(images.length - 1, Math.floor(scrollFraction * images.length));

    drawCoverImage(canvas, context, images[frameIndex]);

    // Fade out title
    title.style.opacity = scrollFraction < 1 ? 1 - scrollFraction / 1 : 0;
  });

  // Fade in text sections
  sequences.forEach((_, i) => {
    const section = document.getElementById(`text${i + 1}`);
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const windowBottom = window.scrollY + window.innerHeight;
    section.classList.toggle('visible', windowBottom >= top );
  });
}

window.addEventListener('scroll', onScroll);



$(document).click(function(event) { 
  var $trigger = $('.closebtn');
  var $target = $(event.target);            
    if ($trigger.css('opacity') !== '0') {
  if(!$target.closest('.sidenav').length){closeNav()}
    }
});

function openNav() {
    $('.sidenav').css('transform', 'translateX(0)');
    $('.closebtn').css('opacity', 1);
    $('.sitename').css('opacity', 1);
    $('.sitename').css('border-bottom-width', '2.4px');
};

function closeNav() {
    $('.sidenav').css('transform', 'translateX(-50em)');
    $('.closebtn').css('opacity', 0);
    $('.sitename').css('opacity', 0);
    $('.sitename').css('border-bottom-width', '0px');
};


function titleHover() {
    $('#t1').mouseenter( function() { $('#t1').text('work sample'); $('#t1').css('cursor', 'pointer'); } );
    $('#t1').mouseleave( function() { $('#t1').text('\xa0 \xa0 \xa0'); } );

    $('#t2').mouseenter( function() { $('#t2').text('rosie\'s song'); $('#t2').css('cursor', 'pointer'); } );
    $('#t2').mouseleave( function() { $('#t2').text('\xa0 \xa0 \xa0'); } );

    $('#t3').mouseenter( function() { $('#t3').text('the question of grief'); $('#t3').css('cursor', 'pointer'); } );
    $('#t3').mouseleave( function() { $('#t3').text('\xa0 \xa0 \xa0'); } );

    $('#t4').mouseenter( function() { $('#t4').text('a few attempts to understand the sky'); $('#t4').css('cursor', 'pointer'); } );
    $('#t4').mouseleave( function() { $('#t4').text('\xa0 \xa0 \xa0'); } );

    $('#t5').mouseenter( function() { $('#t5').text('weather diary'); $('#t5').css('cursor', 'pointer'); } );
    $('#t5').mouseleave( function() { $('#t5').text('\xa0 \xa0 \xa0'); } );

    $('#t6').mouseenter( function() { $('#t6').text('verizon device showcase'); $('#t6').css('cursor', 'pointer'); } );
    $('#t6').mouseleave( function() { $('#t6').text('\xa0 \xa0 \xa0'); } );

    $('#t7').mouseenter( function() { $('#t7').text('the visitors'); $('#t7').css('cursor', 'pointer'); } );
    $('#t7').mouseleave( function() { $('#t7').text('\xa0 \xa0 \xa0'); } );

    $('#t8').mouseenter( function() { $('#t8').text('disability x maternity'); $('#t8').css('cursor', 'pointer'); } );
    $('#t8').mouseleave( function() { $('#t8').text('\xa0 \xa0 \xa0'); } );

    $('#t9').mouseenter( function() { $('#t9').text('a house of one\'s own'); $('#t9').css('cursor', 'pointer'); } );
    $('#t9').mouseleave( function() { $('#t9').text('\xa0 \xa0 \xa0'); } );

    $('#t10').mouseenter( function() { $('#t10').text('yale event posters'); $('#t10').css('cursor', 'pointer'); } );
    $('#t10').mouseleave( function() { $('#t10').text('\xa0 \xa0 \xa0'); } );

    $('#t11').mouseenter( function() { $('#t11').text('john ashbery\'s nest'); $('#t11').css('cursor', 'pointer'); } );
    $('#t11').mouseleave( function() { $('#t11').text('\xa0 \xa0 \xa0'); } );

    $('#t12').mouseenter( function() { $('#t12').text('my name is juan'); $('#t12').css('cursor', 'pointer'); } );
    $('#t12').mouseleave( function() { $('#t12').text('\xa0 \xa0 \xa0'); } );

    $('#t13').mouseenter( function() { $('#t13').text('you\'ve arrived'); $('#t13').css('cursor', 'pointer'); } );
    $('#t13').mouseleave( function() { $('#t13').text('\xa0 \xa0 \xa0'); } );

    $('#t14').mouseenter( function() { $('#t14').text('the radical other'); $('#t14').css('cursor', 'pointer'); } );
    $('#t14').mouseleave( function() { $('#t14').text('\xa0 \xa0 \xa0'); } );

    $('#t15').mouseenter( function() { $('#t15').text('shadow puppet archive'); $('#t15').css('cursor', 'pointer'); } );
    $('#t15').mouseleave( function() { $('#t15').text('\xa0 \xa0 \xa0'); } );

    $('#t16').mouseenter( function() { $('#t16').text('unreading text'); $('#t16').css('cursor', 'pointer'); } );
    $('#t16').mouseleave( function() { $('#t16').text('\xa0 \xa0 \xa0'); } );

    $('#t17').mouseenter( function() { $('#t17').text('civil disobedience guides'); $('#t17').css('cursor', 'pointer'); } );
    $('#t17').mouseleave( function() { $('#t17').text('\xa0 \xa0 \xa0'); } );

    $('#t18').mouseenter( function() { $('#t18').text('o-14 monograph'); $('#t18').css('cursor', 'pointer'); } );
    $('#t18').mouseleave( function() { $('#t18').text('\xa0 \xa0 \xa0'); } );
  }

$( document ).ready(function() {
    titleHover();
    var hash = window.location.hash.substring(1);
    var count = Math.ceil(hash/2);
    title = $('#' + 't' + count);
    $('.proj').css('border-bottom-color', 'white');
    $('.proj').css('color', 'white');
    // title.css('color', 'black');
    // title.css('border-bottom-color', 'black');
});


