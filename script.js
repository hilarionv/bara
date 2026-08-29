document.addEventListener('DOMContentLoaded', function () {
    var galleries = document.querySelectorAll('.case-photos');

    galleries.forEach(function (gallery) {
        // Empaqueter la galerie dans un conteneur positionné pour placer la flèche par-dessus
        var wrap = document.createElement('div');
        wrap.className = 'case-photos-wrap';
        gallery.parentNode.insertBefore(wrap, gallery);
        wrap.appendChild(gallery);

        var arrow = document.createElement('button');
        arrow.className = 'case-arrow';
        arrow.type = 'button';
        arrow.setAttribute('aria-label', 'Voir la photo suivante');
        arrow.innerHTML = '›';
        wrap.appendChild(arrow);

        arrow.addEventListener('click', function () {
            gallery.scrollBy({ left: gallery.clientWidth * 0.75, behavior: 'smooth' });
        });

        // Cacher la flèche une fois arrivé tout à droite
        gallery.addEventListener('scroll', function () {
            var atEnd = gallery.scrollLeft + gallery.clientWidth >= gallery.scrollWidth - 10;
            arrow.style.opacity = atEnd ? '0' : '1';
        });
    });
});
