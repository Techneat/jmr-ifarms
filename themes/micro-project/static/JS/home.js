  // Intersection Observer for triggering animations
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      } else {
        // entry.target.classList.remove('animate'); // optional (remove if you want one-time animation)
      }
    });
  }, { threshold: 0.3 });

  document.querySelectorAll('.box').forEach(box => {
    observer.observe(box);
  });

  // overlay video

 document.addEventListener('DOMContentLoaded', function() {
      const playBtn = document.getElementById('playBtn');
      const overlay = document.getElementById('videoOverlay');
      const closeBtn = document.getElementById('closeBtn');
      const video = document.getElementById('videoPlayer');
      const videoBox = document.querySelector('.video-box');

      function openOverlay() {
        overlay.classList.add('active');
        overlay.setAttribute('aria-hidden', 'false');

        document.body.style.overflow = 'hidden';
    
        video.currentTime = 0;
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch((err) => {

            console.warn('Video autoplay blocked:', err);
          });
        }

        closeBtn.focus();
      }

      function closeOverlay() {
        overlay.classList.remove('active');
        overlay.setAttribute('aria-hidden', 'true');

        try {
          video.pause();
          video.currentTime = 0;
        } catch (e) { /* ignore */ }

        document.body.style.overflow = '';
  
        playBtn.focus();
      }


      playBtn.addEventListener('click', openOverlay);

      closeBtn.addEventListener('click', closeOverlay);


      overlay.addEventListener('click', function(e) {
        if (e.target === overlay) { 
          closeOverlay();
        }
      });


      videoBox.addEventListener('click', function(e) {
        e.stopPropagation();
      });


      document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && overlay.classList.contains('active')) {
          closeOverlay();
        }
      });

   
      if (!playBtn || !overlay || !closeBtn || !video) {
        console.error('Video overlay: required element missing', { playBtn, overlay, closeBtn, video });
      }
    });


       jQuery(document).ready(function($) {
      var owl = $('#customers-testimonials');
      owl.owlCarousel({
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: true,
        dots: true,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        responsive: {
          0: { items: 1 },
          768: { items: 2 },
          1170: { items: 3 }
        }
      });

      // Next/Prev button click handlers
      $('.next').click(function() {
        owl.trigger('next.owl.carousel');
      });
      $('.prev').click(function() {
        owl.trigger('prev.owl.carousel');
      });
    });
