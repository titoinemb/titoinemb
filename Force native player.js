document.addEventListener("DOMContentLoaded", function() {
            // Sélectionner toutes les balises vidéo sur la page
            var videos = document.querySelectorAll('video');

            // Forcer le lecteur natif et configurer les vidéos
            videos.forEach(function(video) {
                // Assurez-vous que le lecteur natif est utilisé en configurant les attributs
                video.setAttribute('controls', ''); // Ajoute les contrôles du lecteur natif
                video.setAttribute('autoplay', ''); // Démarre la lecture automatiquement
                video.setAttribute('preload', 'auto'); // Précharge la vidéo pour une lecture plus fluide
            });
        });
